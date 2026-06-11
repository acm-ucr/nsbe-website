"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Clock, MapPin, X } from "lucide-react";
import { events, type EventItem } from "@/data/events";

const WEEKDAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const toKey = (date: Date) =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

const eventsByDate = events.reduce<Record<string, EventItem[]>>(
  (acc, event) => {
    (acc[event.date] ||= []).push(event);
    return acc;
  },
  {},
);

const Calendar = () => {
  const today = new Date();
  const [view, setView] = useState({
    year: today.getFullYear(),
    month: today.getMonth(),
  });
  const [selected, setSelected] = useState<EventItem | null>(null);

  const { year, month } = view;

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
    <div className="border-nsbe-yellow-100 bg-nsbe-gray-50 relative mx-auto w-full max-w-3xl rounded-2xl border-4 p-4 md:p-6">
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
        <div className="bg-nsbe-yellow-100 text-nsbe-gray-50 absolute top-1/2 left-1/2 w-72 max-w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-lg p-4 shadow-xl">
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
