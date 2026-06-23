"use client";

import { useMemo, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Clock, MapPin, X } from "lucide-react";

interface EventItem {
  id: string;
  name: string;
  date: string;
  startTime: string;
  endTime: string;
  location: string;
  rsvpUrl: string;
}

interface GoogleCalendarEvent {
  id: string;
  summary?: string;
  location?: string;
  htmlLink?: string;
  start: { dateTime?: string; date?: string };
  end: { dateTime?: string; date?: string };
}

const WEEKDAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const toKey = (date: Date) =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

const Calendar = () => {
  const today = new Date();
  const [events, setEvents] = useState<EventItem[]>([]);
  const [view, setView] = useState({
    year: today.getFullYear(),
    month: today.getMonth(),
  });
  const [selected, setSelected] = useState<EventItem | null>(null);

  const { year, month } = view;

  useEffect(() => {
    const fetchCalendarEvents = async () => {
      const apiKey = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY;
      const calendarId = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL;

      const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}&singleEvents=true&maxResults=250`;

      try {
        const response = await fetch(url);
        const data = await response.json();

        if (!data.items) return;

        const formatted: EventItem[] = data.items.map(
          (event: GoogleCalendarEvent) => {
            const start = new Date(
              event.start.dateTime || event.start.date || "",
            );
            const end = new Date(event.end.dateTime || event.end.date || "");

            return {
              id: event.id,
              name: event.summary || "Untitled Event",
              date: toKey(start),
              startTime: start.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
              }),
              endTime: end.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
              }),
              location: event.location || "TBD",
              rsvpUrl: event.htmlLink || "/",
            };
          },
        );

        setEvents(formatted);
      } catch (err) {
        console.error("Error fetching events for main grid layout:", err);
      }
    };

    fetchCalendarEvents();
  }, []);

  const eventsByDate = useMemo(() => {
    return events.reduce<Record<string, EventItem[]>>((acc, event) => {
      (acc[event.date] ||= []).push(event);
      return acc;
    }, {});
  }, [events]);

  const cells = useMemo(() => {
    const firstWeekday = new Date(year, month, 1).getDay();
    const start = new Date(year, month, 1 - firstWeekday);
    return Array.from({ length: 42 }, (_, i) => {
      const date = new Date(start);
      date.setDate(start.getDate() + i);
      return date;
    });
  }, [year, month]);

  const changeMonth = (delta: number) => {
    setSelected(null);
    setView(({ year, month }) => {
      const next = new Date(year, month + delta, 1);
      return { year: next.getFullYear(), month: next.getMonth() };
    });
  };

  const monthLabel = new Date(year, month, 1).toLocaleString("en-US", {
    month: "long",
  });

  return (
    <div className="border-nsbe-yellow-100 bg-nsbe-gray-50 relative m-16 mx-auto w-full max-w-5xl rounded-2xl border-8 p-4 md:p-6">
      <div className="mb-4 flex items-center justify-between text-white">
        <button
          onClick={() => changeMonth(-1)}
          aria-label="Previous month"
          className="hover:text-nsbe-yellow-100 p-2 transition-colors"
        >
          <ChevronLeft className="size-6" />
        </button>
        <h3 className="text-xl font-bold tracking-wide">
          {monthLabel} {year}
        </h3>
        <button
          onClick={() => changeMonth(1)}
          aria-label="Next month"
          className="hover:text-nsbe-yellow-100 p-2 transition-colors"
        >
          <ChevronRight className="size-6" />
        </button>
      </div>

      <div className="grid grid-cols-7 text-center text-xs text-white md:text-sm">
        {WEEKDAYS.map((day) => (
          <div key={day} className="py-2">
            {day}
          </div>
        ))}
      </div>

      <div className="border-nsbe-gray-100 grid grid-cols-7 overflow-hidden rounded-md border">
        {cells.map((date) => {
          const key = toKey(date);
          const inMonth = date.getMonth() === month;
          const isToday = key === toKey(today);
          const dayEvents = eventsByDate[key] ?? [];

          return (
            <div
              key={key}
              className={`border-nsbe-gray-100 min-h-16 border p-1 md:min-h-20 ${
                inMonth ? "text-white" : "text-nsbe-gray-100"
              } ${isToday ? "bg-nsbe-gray-100" : ""}`}
            >
              <span className="text-xs md:text-sm">{date.getDate()}</span>
              <div className="mt-1 flex flex-col gap-1">
                {dayEvents.map((event) => (
                  <button
                    key={event.id}
                    onClick={() => setSelected(event)}
                    className="bg-nsbe-yellow-100 text-nsbe-gray-50 truncate rounded px-1 py-0.5 text-left text-xs"
                  >
                    {event.name}
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {selected && (
        <div className="bg-nsbe-yellow-100 text-nsbe-gray-50 absolute top-1/2 left-1/2 z-10 w-72 max-w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-lg p-4 shadow-xl">
          <div className="flex items-start justify-between">
            <h4 className="font-bold">{selected.name}</h4>
            <button
              onClick={() => setSelected(null)}
              aria-label="Close"
              className="p-1"
            >
              <X className="size-4" />
            </button>
          </div>
          <div className="mt-2 flex items-center gap-2 text-sm">
            <Clock className="size-4" />
            <span>
              {selected.startTime} - {selected.endTime}
            </span>
          </div>
          <div className="mt-1 flex items-center gap-2 text-sm">
            <MapPin className="size-4" />
            <span>{selected.location}</span>
          </div>
          <a
            href={selected.rsvpUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border-nsbe-gray-50 hover:bg-nsbe-gray-50 mt-3 inline-block rounded border px-4 py-1 text-sm transition-colors hover:text-white"
          >
            RSVP
          </a>
        </div>
      )}
    </div>
  );
};

export default Calendar;
