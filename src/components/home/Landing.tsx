import React from "react";
import Image from "next/image";
import { FiInstagram, FiMail } from "react-icons/fi";
import homeLanding from "@/public/home/HomeLanding.webp";

const Landing = () => {
  return (
    <div className="border-b-nsbe-yellow-100 relative flex h-[80vh] items-center justify-center overflow-hidden border-b-4">
      <div className="absolute inset-0">
        <Image
          src={homeLanding}
          alt="NSBE UCR Group"
          className="h-full w-full object-cover brightness-50"
        />
      </div>

      <div className="text-nsbe-yellow-100 relative z-10 px-4 text-center">
        <div className="text-8xl font-extrabold">NSBE</div>
        <p className="mt-2 text-4xl font-bold">
          National Society of Black Engineers <br /> at UCR
        </p>

        <div className="mt-4 flex justify-center gap-8 text-5xl">
          <a
            href="mailto:ucrnsbepres@gmail.com"
            target="_blank"
            className="transition-transform hover:scale-110"
          >
            <FiMail />
          </a>
          <a
            href="https://www.instagram.com/nsbe_ucr/"
            target="_blank"
            className="transition-transform hover:scale-110"
          >
            <FiInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
