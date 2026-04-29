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

const EventCard = ({ day, date, title, startTime, endTime,location, description, rsvpLink }: EventCardProps) => {
  return (
    <div className="flex items-stretch bg-nsbe-gray-50 rounded-md overflow-hidden border border-nsbe-gray-100">

      <div className="flex items-center justify-center px-3 py-2 border-r border-nsbe-gray-50">
        <div className="flex flex-col items-center justify-center border border-nsbe-gray-100 rounded px-5 py-5 min-w-[64px]">
          <span className="text-xs uppercase tracking-widest text-white">{day}</span>
          <span className="text-4xl text-white leading-none mt-1">{date}</span>
        </div>
      </div>

      <div className="flex flex-col justify-center px-5 py-4 gap-1 flex-1">
        <p className="text-white text uppercase tracking-wide">{title}</p>
        <p className="flex items-center gap-1 text-white text-xs">
          <BsClock className="shrink-0" />
          {startTime} - {endTime}
        </p>
        <p className="flex items-center gap-1 text-white text-xs">
          <MdLocationOn className="shrink-0" />
          {location}
        </p>
      </div>

      <div className="w-px bg-nsbe-gray-100 my-3" />

      <div className="flex flex-col justify-between px-5 py-4 max-w-[240px]">
        <p className="text-white text-xs leading-relaxed line-clamp-3">{description}</p>
        <div className="flex justify-end mt-3">
          <a href={rsvpLink} target="_blank" rel="noopener noreferrer" className="border border-white text-white text-xs px-6 py-1 rounded">
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
      description: "Lorem ipsum dolor sit amet consectetur adipiscing alexs. Quisque faucibus ex sapien vitae pellentesque sem placerat. (Event Description)",
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