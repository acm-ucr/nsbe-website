"use client";
import { usePathname } from "next/navigation";
import NSBElogo from "@/public/Logo.webp";
import Image from "next/image";
import Link from "next/link";
import navigations from "@/data/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const getLinkStyle = (path: string) => {
    const isActive = pathname === path;

    return `mt-5 px-5 mx-4 py-2 rounded-md text-nsbe-yellow-100 transition-colors ${
      isActive
        ? "bg-nsbe-yellow-100/20 border-2"
        : "hover:bg-nsbe-yellow-100/20 hover:border-2 "
    }`;
  };
  return (
    <div className="flex flex-col">
      <div className="bg-nsbe-gray-50 border-nsbe-yellow-100 flex h-20 w-full flex-row border-b-4">
        <Image src={NSBElogo} alt="NSBE Logo" width={60} height={15} />
        <div className="flex w-full justify-between">
          <div className="flex flex-col">
            <div className="text-nsbe-yellow-100 pt-5 text-lg font-light">
              NSBE AT UCR
            </div>
            <div className="text-nsbe-yellow-100 text-xs font-thin whitespace-nowrap">
              NATIONAL SOCIETY OF BLACK ENGINEERS
            </div>
          </div>
          <div className="mt-7">
            {navigations.map(({ name, link }) => (
              <Link key={name} href={link} className={getLinkStyle(link)}>
                {name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
