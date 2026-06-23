"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import NSBElogo from "@/public/Logo.webp";
import Image from "next/image";
import Link from "next/link";
import navigations from "@/data/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const getLinkStyle = (path: string) => {
    const isActive = pathname === path;
    return `px-5 py-2 rounded-md text-nsbe-yellow-100 transition-colors ${
      isActive
        ? "bg-nsbe-yellow-100/20 border-2 border-nsbe-yellow-100"
        : "hover:bg-nsbe-yellow-100/20 hover:border-2 hover:border-nsbe-yellow-100"
    }`;
  };

  const getMobileLinkStyle = (path: string) => {
    const isActive = pathname === path;
    return `mt-2 px-5 py-3 rounded-md text-nsbe-yellow-100 transition-colors ${
      isActive
        ? "bg-nsbe-yellow-100/20 border-2 border-nsbe-yellow-100"
        : "hover:bg-nsbe-yellow-100/20 hover:border-2 hover:border-nsbe-yellow-100"
    }`;
  };

  return (
    <div className="flex flex-col">
      <div className="bg-nsbe-gray-50 border-nsbe-yellow-100 flex h-20 w-full flex-row items-center border-b-4 px-3">
        <Image
          src={NSBElogo}
          alt="NSBE Logo"
          width={60}
          height={60}
          className="mr-3 shrink-0"
        />

        <div className="flex min-w-0 flex-1 items-center justify-between">
          <div className="hidden flex-1 flex-col sm:flex">
            <span className="text-nsbe-yellow-100 text-lg font-light">
              NSBE AT UCR
            </span>
            <span className="text-nsbe-yellow-100 text-xs font-thin whitespace-nowrap">
              NATIONAL SOCIETY OF BLACK ENGINEERS
            </span>
          </div>

          <nav className="hidden flex-row gap-2 sm:flex">
            {navigations.map(({ name, link }) => (
              <Link key={name} href={link} className={getLinkStyle(link)}>
                {name}
              </Link>
            ))}
          </nav>

          <button
            className="ml-auto flex flex-col gap-[5px] p-2 sm:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span
              className={`bg-nsbe-yellow-100 block h-0.5 w-6 transition-transform duration-300 ${
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`bg-nsbe-yellow-100 block h-0.5 w-6 transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`bg-nsbe-yellow-100 block h-0.5 w-6 transition-transform duration-300 ${
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <nav
        className={`bg-nsbe-gray-50 flex flex-col overflow-hidden px-4 text-center transition-[max-height,opacity] duration-300 ease-out sm:hidden ${
          menuOpen
            ? "max-h-96 p-2 opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        {navigations.map(({ name, link }) => (
          <Link
            key={name}
            href={link}
            className={getMobileLinkStyle(link)}
            onClick={() => setMenuOpen(false)}
          >
            {name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
