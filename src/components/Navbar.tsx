"use client";
import { usePathname } from "next/navigation";
import NSBElogo from "@/public/Logo.webp";
import Image from "next/image";
import Link from "next/link";
import { items } from "@/data/navigation";



const Navbar = () => {
  const pathname = usePathname();

  const getLinkStyle = (path) => {
    const isActive = pathname === path;

    return `mt-5 px-10 py-2 rounded-md text-nsbe-yellow-100 transition-colors ${
      isActive ? "bg-nsbe-yellow-100/50 border-3" : "hover:bg-nsbe-yellow-100/20"
    }`;
  };
  return (
    <div className="flex flex-col">
      <div className="flex flex-row w-full h-20 bg-nsbe-yellow-100/5">
        <Image src= {NSBElogo} alt = "NSBE Logo" className="size-20" ></Image>
        <div className="flex flex-col">
          <div className="pt-5 text-nsbe-yellow-100 font-light text-lg">NSBE AT UCR</div>
          <div className=" text-nsbe-yellow-100 font-thin text-xs whitespace-nowrap">NATIONAL SOCIETY OF BLACK ENGINEERS</div>
        </div>
        <div className="ml-150 mt-7">
          <Link href= "/home" className={getLinkStyle("/home")}>HOME</Link>
          <Link href= "/about" className={getLinkStyle("/about")}>ABOUT</Link>
          <Link href= "/board" className={getLinkStyle("/board")}>BOARD</Link>
          <Link href= "/events" className={getLinkStyle("/events")}>EVENTS</Link>
        </div>
      </div>
      <div className="flex flex-col w-full h-1 bg-nsbe-yellow-100">
      </div>
    </div>
  );
};

export default Navbar;
