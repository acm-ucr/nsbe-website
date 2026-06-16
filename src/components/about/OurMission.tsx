"use client";

import { motion } from "motion/react";

const slamanimation = {
  hidden: { opacity: 0, scale: 1.8, y: -60 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
  },
};

const OurMission = () => {
  return (
    <div className="bg-nsbe-black-100 flex flex-col items-center justify-center px-8 py-16 text-center">
      <motion.div
        className="flex flex-col items-center"
        variants={slamanimation}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ type: "spring", stiffness: 200, damping: 14, mass: 0.8 }}
      >
        <div className="text-nsbe-yellow-100 mb-6 text-3xl font-bold">
          OUR MISSION
        </div>

        <p className="text-nsbe-yellow-100 max-w-4xl text-xl">
          As the organization has grown, advancing the professional prospects
          and development of Black engineers, our purpose has remained the same.
        </p>

        <p className="text-nsbe-yellow-100 max-w-4xl text-xl">
          We aim "to increase the number of culturally responsible Black
          Engineers who excel academically, succeed professionally, and
          positively impact the community".
        </p>
      </motion.div>
    </div>
  );
};

export default OurMission;
