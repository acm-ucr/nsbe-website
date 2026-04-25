"use client";

import Link from "next/link";
import Image from "next/image";
import gearImg from "@/public/error/Gear.webp";

const NotFound = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center select-none">
      <div className="relative flex items-center justify-center">
        <Image
          src={gearImg}
          alt="gear"
          width={650}
          height={650}
          className="object-contain"
        />

        <div className="absolute mt-10 mr-8 flex flex-col items-center text-center">
          <p className="text-nsbe-yellow-100 text-9xl font-extrabold">404</p>
          <p className="text-nsbe-yellow-100 text-4xl font-bold">
            Page not found.
          </p>
        </div>
      </div>

      <Link
        href="/"
        className="border-nsbe-yellow-100 text-nsbe-yellow-100 mt-16 mr-16 rounded-xl border-3 px-5 py-4 text-2xl transition-opacity hover:opacity-60"
      >
        RETURN HOME
      </Link>
    </div>
  );
};

export default NotFound;
