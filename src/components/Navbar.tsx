"use client";
import { usePathname } from "next/navigation";
import NSBElogo from "@/public/Logo.webp";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();

  const getLinkStyle = (path : string) => {
    const isActive = pathname === path;

    return `mt-5 px-10 py-2 rounded-md text-nsbe-yellow-100 transition-colors ${
      isActive
        ? "bg-nsbe-yellow-100/50 border-3"
        : "hover:bg-nsbe-yellow-100/20"
    }`;
  };
  return (
    <div className="flex flex-col">
      <div className="bg-nsbe-yellow-100/5 flex h-20 w-full flex-row">
        <Image src={NSBElogo} alt="NSBE Logo" className="size-20"></Image>
        <div className="flex flex-col">
          <div className="text-nsbe-yellow-100 pt-5 text-lg font-light">
            NSBE AT UCR
          </div>
          <div className="text-nsbe-yellow-100 text-xs font-thin whitespace-nowrap">
            NATIONAL SOCIETY OF BLACK ENGINEERS
          </div>
        </div>
        <div className="mt-7 ml-150">
          <Link href="/home" className={getLinkStyle("/home")}>
            HOME
          </Link>
          <Link href="/about" className={getLinkStyle("/about")}>
            ABOUT
          </Link>
          <Link href="/board" className={getLinkStyle("/board")}>
            BOARD
          </Link>
          <Link href="/events" className={getLinkStyle("/events")}>
            EVENTS
          </Link>
        </div>
      </div>
      <div className="bg-nsbe-yellow-100 flex h-1 w-full flex-col"></div>
    </div>
  );
};

export default Navbar;
