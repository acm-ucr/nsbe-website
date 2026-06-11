import Calendar from "@/components/events/Calendar";
import UpcomingEvents from "@/components/events/UpcomingEvents";

const Events = () => {
  return (
    <div className="flex flex-col items-center gap-16 py-16">
      <Calendar />
      <UpcomingEvents />
    </div>
  );
};

export default Events;
