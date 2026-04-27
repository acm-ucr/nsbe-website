"use client";

import Link from "next/link";
import Image from "next/image";
import gearImg from "@/public/error/Gear.webp";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative flex items-center justify-center">
        <Image src={gearImg} alt="gear" className="object-contain" />

        <div className="absolute flex flex-col items-center text-center">
          <div className="text-nsbe-yellow-100 text-8xl font-extrabold">
            404
          </div>
          <div className="text-nsbe-yellow-100 text-3xl font-bold">
            Page not found.
          </div>
        </div>
      </div>

      <Link
        href="/"
        className="border-nsbe-yellow-100 text-nsbe-yellow-100 mr-10 rounded-xl border-3 px-5 py-3 text-xl transition-opacity hover:opacity-60"
      >
        RETURN HOME
      </Link>
    </div>
  );
};

export default NotFound;
