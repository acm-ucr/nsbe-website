import { IconType } from "react-icons";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";

interface FooterLink {
  icon: IconType;
  url: string;
}

export const footerData: FooterLink[] = [
  {
    icon: MdEmail,
    url: "mailto:nsbe@ucr.edu",
  },
  {
    icon: FaInstagram,
    url: "https://www.instagram.com/nsbe_ucr/",
  },
];
