import { IconType } from "react-icons";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";

interface FooterLink {
  icon: IconType;
  url: string;
}

export const footerData: FooterLink[] = [
  {
    icon: MdOutlineEmail,
    url: "mailto:nsbe@ucr.edu",
  },
  {
    icon: FaInstagram,
    url: "https://www.instagram.com/nsbe_ucr/",
  },
];
