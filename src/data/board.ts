import { StaticImageData } from "next/image";

import Ornella from "@/public/board/Ornella.webp";
import Aaron from "@/public/board/Aaron.webp";
import Isaiah from "@/public/board/Isaiah.webp";
import Motunrayo from "@/public/board/Motunrayo.webp";
import Jesse from "@/public/board/Jesse.webp";
import Aliana from "@/public/board/Aliana.webp";
import Chiagoziem from "@/public/board/Chiagoziem.webp";
import Chinelo from "@/public/board/Chinelo.webp";
import Steven from "@/public/board/Steven.webp";
import Daelon from "@/public/board/Daelon.webp";
import Bryan from "@/public/board/Bryan.webp";
import Malia from "@/public/board/Malia.webp";

export type BoardMember = {
  image: StaticImageData;
  name: string;
  position: string;
  linkedin: string;
};

export type BoardSection = {
  members: BoardMember[];
};

const board: BoardSection[] = [
  {
    members: [
      {
        image: Ornella,
        name: "Ornella Foyet",
        position: "President",
        linkedin: "https://www.linkedin.com/in/ornella-foyet/",
      },
      {
        image: Aaron,
        name: "Aaron Hall",
        position: "Vice President",
        linkedin: "https://www.linkedin.com/in/aaronhall--/",
      },
    ],
  },
  {
    members: [
      {
        image: Isaiah,
        name: "Isaiah Norton",
        position: "Treasurer",
        linkedin: "https://www.linkedin.com/in/isaiah-norton/",
      },
      {
        image: Motunrayo,
        name: "Motunrayo Lawrence",
        position: "Secretary",
        linkedin: "https://www.linkedin.com/in/motunrayo-lawrence/",
      },
      {
        image: Jesse,
        name: "Jesse Ojei",
        position: "Communications Chair",
        linkedin: "https://www.linkedin.com/in/jesse-ojei-47b8b2337/",
      },
    ],
  },
  {
    members: [
      {
        image: Aliana,
        name: "Aliana Aklilu",
        position: "Professional Development Chair",
        linkedin: "https://www.linkedin.com/in/aliana-aklilu-8327aa337/",
      },
      {
        image: Chiagoziem,
        name: "Chiagoziem Onwubuya",
        position: "Public Relations Chair",
        linkedin: "https://www.linkedin.com/in/chiagoziem-onwubuya/",
      },
      {
        image: Chinelo,
        name: "Chinelo Agwumezi",
        position: "Recruitment Chair",
        linkedin: "https://www.linkedin.com/in/chinelo-agwumezie-ab4429274/",
      },
    ],
  },
  {
    members: [
      {
        image: Steven,
        name: "Steven Easter",
        position: "Outreach Chair",
        linkedin: "https://www.linkedin.com/in/steven-easter-m/",
      },
      {
        image: Daelon,
        name: "Daelon Finister",
        position: "Senator",
        linkedin: "https://www.linkedin.com/in/dfinistermeche/",
      },
      {
        image: Bryan,
        name: "Bryan Fokwa",
        position: "Academic Excellence Chair",
        linkedin: "https://www.linkedin.com/in/bryanfokwa08/",
      },
      {
        image: Malia,
        name: "Malia Jones",
        position: "Social/Fundraising Chair",
        linkedin: "https://www.linkedin.com/in/malia-jones-aa5540405/",
      },
    ],
  },
];

export default board;
