"use client";

import Link from "next/link";
import Image from "next/image";
import gearImg from "@/public/error/Gear.webp";

const NotFound = () => {
  return (
    <div className="mt-10 flex min-h-screen flex-col items-center justify-center px-4">
      <div className="relative flex max-w-xs items-center justify-center sm:max-w-md md:max-w-none">
        <Image src={gearImg} alt="Gear Image" className="object-contain" />

        <div className="absolute flex flex-col items-center text-center">
          <div className="text-nsbe-yellow-100 text-5xl font-extrabold sm:text-6xl md:text-8xl">
            404
          </div>
          <div className="text-nsbe-yellow-100 text-lg font-bold sm:text-xl md:text-3xl">
            Page not found.
          </div>
        </div>
      </div>

      <Link
        href="/"
        className="border-nsbe-yellow-100 text-nsbe-yellow-100 mt-10 mb-10 rounded-xl border-3 px-5 py-3 text-xl transition-opacity hover:opacity-60 sm:mt-16 sm:text-xl"
      >
        RETURN HOME
      </Link>
    </div>
  );
};

export default NotFound;
