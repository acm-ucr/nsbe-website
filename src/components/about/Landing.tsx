import React from "react";
import Image from "next/image";
import aboutLanding from "@/public/about/AboutLanding.webp";

const Landing = () => {
  return (
    <div className="border-b-nsbe-yellow-100 relative flex h-[80vh] items-center justify-center overflow-hidden border-b-4">
      <div className="absolute inset-0">
        <Image
          src={aboutLanding}
          alt="NSBE UCR Group"
          className="h-full w-full object-cover brightness-50"
        />
      </div>
      <div className="text-nsbe-yellow-100 relative z-10 px-4 text-center text-6xl font-extrabold">
        ABOUT US
      </div>
    </div>
  );
};

export default Landing;
