import { BsClock } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";

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
    <div className="bg-nsbe-gray-50 border-nsbe-gray-100 flex items-stretch overflow-hidden rounded-md border">
      <div className="border-nsbe-gray-50 flex items-center justify-center border-r px-3 py-2">
        <div className="border-nsbe-gray-100 flex min-w-[64px] flex-col items-center justify-center rounded border px-5 py-5">
          <span className="text-xs tracking-widest text-white uppercase">
            {day}
          </span>
          <span className="mt-1 text-4xl leading-none text-white">{date}</span>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-center gap-1 px-5 py-4">
        <p className="text tracking-wide text-white uppercase">{title}</p>
        <p className="flex items-center gap-1 text-xs text-white">
          <BsClock className="shrink-0" />
          {startTime} - {endTime}
        </p>
        <p className="flex items-center gap-1 text-xs text-white">
          <MdLocationOn className="shrink-0" />
          {location}
        </p>
      </div>

      <div className="bg-nsbe-gray-100 my-3 w-px" />

      <div className="flex max-w-[240px] flex-col justify-between px-5 py-4">
        <p className="line-clamp-3 text-xs leading-relaxed text-white">
          {description}
        </p>
        <div className="mt-3 flex justify-end">
          <a
            href={rsvpLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded border border-white px-6 py-1 text-xs text-white"
          >
            RSVP
          </a>
        </div>
      </div>
    </div>
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
      rsvpLink: "https://example.com/rsvp",
    },
  ];

  return (
    <section className="flex flex-col gap-4 p-6">
      {events.map((event, index) => (
        <EventCard key={index} {...event} />
      ))}
    </section>
  );
};

export default UpcomingEvents;
