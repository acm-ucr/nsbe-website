import React from "react";
import Image from "next/image";
import { FiInstagram, FiMail } from "react-icons/fi";

const Landing = () => {
  return (
    <div className="relative flex h-screen w-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/home/HomeLanding.webp"
          alt="NSBE UCR Group"
          width={1920}
          height={1080}
          className="h-full w-full object-cover brightness-50"
        />
      </div>

      <div className="relative z-10 px-4 text-center">
        <div className="text-8xl font-black text-yellow-500">NSBE</div>
        <p className="mt-2 text-4xl font-bold text-yellow-500">
          National Society of Black Engineers <br /> at UCR
        </p>

        <div className="mt-4 flex justify-center gap-8 text-5xl text-yellow-500">
          <a
            href="mailto:nsbe@ucr.edu"
            className="transition-transform hover:scale-110"
          >
            <FiMail />
          </a>
          <a
            href="https://instagram.com"
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
