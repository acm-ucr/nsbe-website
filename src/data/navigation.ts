export interface navigation {
  name: string;
  link: string;
}
const navigations: navigation[] = [
  { name: "HOME", link: "/" },
  { name: "ABOUT", link: "/about" },
  { name: "BOARD", link: "/board" },
  { name: "EVENTS", link: "/events" },
];

export default navigations;
