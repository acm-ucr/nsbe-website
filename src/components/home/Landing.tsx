import React from "react";
import Image from "next/image";
import { FiInstagram, FiMail } from "react-icons/fi";

const Landing = () => {
  return (
    // relative = absolute positioning for lower levels
    <section className="relative flex h-screen w-screen items-center justify-center overflow-hidden">
      {/* image */}
      {/* z-0 = bottom */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/home/HomeLanding.webp"
          alt="NSBE UCR Group"
          className="object-cover brightness-50"
          fill // covers full height and width of parent absolutely
          priority // loads first on page
        />
      </div>

      {/* NSBE text */}
      <div className="relative z-100 px-4 text-center">
        <h1 className="text-8xl font-black text-yellow-500">NSBE</h1>
        <h2 className="mt-2 text-4xl font-bold text-yellow-500">
          National Society of Black Engineers <br /> at UCR
        </h2>

        {/*Icons*/}
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
    </section>
  );
};

export default Landing;
