import { FiClock, FiMapPin } from "react-icons/fi";

interface EventItem {
  month: string;
  day: string;
  name: string;
  time: string;
  location: string;
  description: string;
}

const events: EventItem[] = [
  {
    month: "MONTH",
    day: "00",
    name: "EVENT NAME",
    time: "00:00-00:00 AM/PM",
    location: "Location",
    description: "Description",
  },
  {
    month: "MONTH",
    day: "00",
    name: "EVENT NAME",
    time: "00:00-00:00 AM/PM",
    location: "Location",
    description: "Description",
  },
];

const EventCard = ({ event }: { event: EventItem }) => {
  return (
    <div className="bg-nsbe-gray-50 flex flex-col gap-4 rounded-lg p-5 shadow-xl">
      <div className="flex gap-4">
        <div className="flex flex-col items-center justify-center rounded-md border border-white/40 px-4 py-2 text-white">
          <span className="text-sm tracking-wide">{event.month}</span>
          <span className="text-3xl font-bold">{event.day}</span>
        </div>

        <div className="flex flex-col justify-center gap-1 text-white">
          <h3 className="text-lg font-semibold">{event.name}</h3>
          <div className="flex items-center gap-2 text-sm text-white/80">
            <FiClock className="h-4 w-4 shrink-0" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-white/80">
            <FiMapPin className="h-4 w-4 shrink-0" />
            <span>{event.location}</span>
          </div>
        </div>
      </div>
      <p className="text-sm text-white/70">{event.description}</p>
      <button className="mt-auto self-end rounded-md border border-white/40 px-6 py-1.5 text-sm text-white transition-colors hover:bg-white/10">
        RSVP
      </button>
    </div>
  );
};

const UpcomingEvents = () => {
  return (
    <section className="flex flex-col items-center px-4 py-12 sm:px-6 lg:px-8">
      <h2 className="text-nsbe-yellow-100 mb-8 text-center text-3xl font-extrabold tracking-wide sm:text-4xl">
        UPCOMING EVENTS
      </h2>

      <div className="bg-nsbe-gray-100 w-full max-w-4xl rounded-xl p-6 shadow-2xl sm:p-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {events.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default UpcomingEvents;
