"use client";

import { useEffect, useState } from "react";
import { BsClock } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import Link from "next/link";

interface EventCardProps {
  day: string;
  date: string;
  title: string;
  startTime: string;
  endTime: string;
  location: string;
  description: string;
  rsvpLink: string;
}

interface GoogleCalendarEvent {
  summary?: string;
  location?: string;
  description?: string;
  htmlLink?: string;
  start: {
    dateTime?: string;
    date?: string;
  };
  end: {
    dateTime?: string;
    date?: string;
  };
}

const EventCard = ({
  day,
  date,
  title,
  startTime,
  endTime,
  location,
  description,
  rsvpLink,
}: EventCardProps) => {
  return (
    <div className="bg-nsbe-gray-50 flex w-full max-w-4xl flex-col overflow-hidden rounded-md text-white shadow-[1px_5px_3px_rgba(0,0,0,0.2)] md:flex-row">
      <div className="flex md:contents">
        <div className="border-nsbe-gray-50 flex items-center justify-center px-3 py-3 md:border-r md:py-2">
          <div className="border-nsbe-gray-100 flex min-w-[64px] flex-col items-center justify-center rounded-xl border px-5 py-4 md:py-5">
            <div className="text-xs tracking-widest md:text-base">{day}</div>
            <div className="mt-1 text-3xl md:text-4xl">{date}</div>
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-center gap-1 px-5 py-4">
          <div className="text-base tracking-wide">{title}</div>
          <div className="flex items-center gap-1 text-xs md:text-sm">
            <BsClock className="shrink-0 md:size-5" />
            {startTime} - {endTime}
          </div>
          <div className="flex items-center gap-1 text-xs md:text-sm">
            <MdLocationOn className="shrink-0 md:size-5" />
            {location}
          </div>
        </div>
      </div>

      <div className="bg-nsbe-gray-100 hidden md:mx-0 md:my-3 md:block md:h-auto md:w-px" />

      <div className="flex flex-col justify-between px-5 py-4 md:w-1/2">
        <div className="line-clamp-3 text-sm leading-relaxed">
          {description}
        </div>
        <div className="mt-3 flex justify-end">
          <Link
            className="rounded border border-white px-6 py-1 text-xs"
            href={rsvpLink}
          >
            RSVP
          </Link>
        </div>
      </div>
    </div>
  );
};

const UpcomingEvents = () => {
  const [events, setEvents] = useState<EventCardProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      const apiKey = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY;
      const calendarId = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL;

      const now = new Date().toISOString();
      const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}&timeMin=${now}&orderBy=startTime&singleEvents=true&maxResults=2`;
      try {
        const response = await fetch(url);
        const data = await response.json();

        if (!data.items) {
          setEvents([]);
          return;
        }

        const formattedEvents: EventCardProps[] = data.items.map(
          (event: GoogleCalendarEvent) => {
            const startStr = event.start.dateTime || event.start.date || "";
            const endStr = event.end.dateTime || event.end.date || "";

            const start = new Date(startStr);
            const end = new Date(endStr);

            return {
              day: start
                .toLocaleString("en-US", { month: "short" })
                .toUpperCase(),
              date: start.getDate().toString().padStart(2, "0"),
              title: event.summary || "Untitled Event",
              startTime: start.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
              }),
              endTime: end.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
              }),
              location: event.location || "TBD",
              description: event.description || "No description provided.",
              rsvpLink: event.htmlLink || "/",
            };
          },
        );

        setEvents(formattedEvents);
      } catch (error) {
        console.error("Error fetching calendar events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="my-16 flex w-full flex-col items-center gap-4 p-6">
      <div className="text-nsbe-yellow-100 mb-5 text-center text-2xl font-bold tracking-wide sm:text-3xl md:text-4xl">
        UPCOMING EVENTS
      </div>
      <div className="bg-nsbe-gray-100 flex w-full max-w-4xl flex-col items-center gap-4 rounded-xl border border-white p-6 shadow-2xl">
        {loading ? (
          <div className="text-white">Loading events...</div>
        ) : events.length === 0 ? (
          <div className="text-white">No upcoming events found.</div>
        ) : (
          events.map((event, index) => <EventCard key={index} {...event} />)
        )}
      </div>
    </div>
  );
};

export default UpcomingEvents;
