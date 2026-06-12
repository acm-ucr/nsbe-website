"use client";

import { motion } from "framer-motion";
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
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="bg-nsbe-gray-50 flex w-full max-w-4xl flex-col overflow-hidden rounded-md text-white shadow-[1px_5px_3px_rgba(0,0,0,0.2)] md:flex-row"
    >
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
        <div className="text-sm leading-relaxed">{description}</div>

        <div className="mt-3 flex justify-end">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              className="rounded border border-white px-6 py-1 text-xs transition-colors duration-200 hover:bg-white hover:text-black"
              href={rsvpLink}
            >
              RSVP
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const UpcomingEvents = () => {
  const events: EventCardProps[] = [
    {
      day: "MONTH",
      date: "00",
      title: "Event Name",
      startTime: "00:00 AM/PM",
      endTime: "00:00 AM/PM",
      location: "Location",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing alexs. Quisque faucibus ex sapien vitae pellentesque sem placerat. (Event Description)",
      rsvpLink: "/",
    },
  ];

  return (
    <div className="flex w-full flex-col items-center gap-4 p-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-nsbe-yellow-100 text-center text-2xl font-bold tracking-wide sm:text-3xl md:text-4xl"
      >
        UPCOMING EVENTS
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-nsbe-gray-100 flex w-full max-w-4xl justify-center rounded-xl border border-white p-6 shadow-2xl"
      >
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </motion.div>
    </div>
  );
};

export default UpcomingEvents;
