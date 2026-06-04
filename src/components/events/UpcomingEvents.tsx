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
}

const EventCard = ({
  day,
  date,
  title,
  startTime,
  endTime,
  location,
  description,
}: EventCardProps) => {
  return (
    <div className="bg-nsbe-gray-50 border-nsbe-gray-100 flex w-full max-w-4xl flex-col overflow-hidden rounded-md border text-white sm:w-11/12 md:w-10/12 md:flex-row">
      <div className="flex md:contents">
        <div className="border-nsbe-gray-50 flex items-center justify-center px-3 py-3 md:border-r md:py-2">
          <div className="border-nsbe-gray-100 flex min-w-[64px] flex-col items-center justify-center rounded border px-5 py-4 md:py-5">
            <div className="text-xs tracking-widest">{day}</div>
            <div className="mt-1 text-3xl md:text-4xl">{date}</div>
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-center gap-1 px-5 py-4">
          <div className="text-base tracking-wide">{title}</div>
          <div className="flex items-center gap-1 text-xs">
            <BsClock className="shrink-0" />
            {startTime} - {endTime}
          </div>
          <div className="flex items-center gap-1 text-xs">
            <MdLocationOn className="shrink-0" />
            {location}
          </div>
        </div>
      </div>

      <div className="bg-nsbe-gray-100 mx-5 h-px md:mx-0 md:my-3 md:h-auto md:w-px" />

      <div className="flex flex-col justify-between px-5 py-4 md:w-1/2">
        <div className="text-sm leading-relaxed">{description}</div>
        <div className="mt-3 flex justify-end">
          <div className="rounded border border-white px-6 py-1 text-xs">
            RSVP
          </div>
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
    },
  ];

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <div className="text-nsbe-yellow-100 text-center text-2xl font-bold tracking-wide sm:text-3xl md:text-4xl">
        UPCOMING EVENTS
      </div>
      {events.map((event, index) => (
        <EventCard key={index} {...event} />
      ))}
    </div>
  );
};

export default UpcomingEvents;
