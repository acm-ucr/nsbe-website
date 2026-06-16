"use client";

import Image from "next/image";
import Logo from "@/public/Logo.webp";
import { motion } from "motion/react";

const slamanimation = {
  hidden: { opacity: 0, scale: 1.8, y: -60 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
  },
};

const History = () => {
  return (
    <div className="mt-5 mb-5 flex items-center justify-center">
      <motion.div
        className="flex w-3/4 flex-col items-center gap-10 md:flex-row"
        variants={slamanimation}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ type: "spring", stiffness: 200, damping: 14, mass: 0.8 }}
      >
        <Image src={Logo} alt="NSBE Logo" className="w-1/2 md:w-full" />

        <div className="bg-nsbe-gray-100/50 rounded-md border border-amber-50 p-5">
          <div className="text-nsbe-yellow-100 mb-5 text-center text-lg font-extrabold md:text-left">
            HISTORY
          </div>

          <p className="text-center text-base leading-relaxed text-white md:text-left">
            The UC Riverside chapter was established in the early 2000s and grew
            rapidly as more students of color entered the university and sought
            out resources to thrive academically and connect with research and
            career opportunities. Our members keep an ongoing commitment to
            excellence that appears in our various programs and outreach
            initiatives to positively impact students both inside and outside
            the university.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default History;
