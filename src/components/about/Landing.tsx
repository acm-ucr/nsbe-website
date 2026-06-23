"use client";

import React from "react";
import Image from "next/image";
import aboutLanding from "@/public/about/AboutLanding.webp";
import { motion } from "motion/react";

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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="text-nsbe-yellow-100 relative z-10 px-4 text-center text-6xl font-extrabold md:text-7xl lg:text-8xl"
      >
        ABOUT US
      </motion.div>
    </div>
  );
};

export default Landing;
