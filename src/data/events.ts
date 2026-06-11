export type EventItem = {
  id: string;
  name: string;
  date: string;
  startTime: string;
  endTime: string;
  location: string;
  description: string;
  rsvpUrl: string;
};

export const events: EventItem[] = [
  {
    id: "example-event",
    name: "Example Event",
    date: "2026-06-07",
    startTime: "6:00 PM",
    endTime: "7:00 PM",
    location: "Example Location",
    description:
      "Example event description. Example event description. Example event description. Example event description. Example event description. Example event description. Example event description. Example event description.",
    rsvpUrl: "#",
  },
];
