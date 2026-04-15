import { IconType } from "react-icons";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";

export type FooterLink = {
  icon: IconType;
  href: string;
};

export const footerData = {
  orgName: "UCR National Society of Black Engineers",
  links: [
    { icon: MdEmail, href: "mailto:nsbe@ucr.edu" },
    { icon: FaInstagram, href: "https://www.instagram.com/nsbe_ucr/" },
  ],
};
