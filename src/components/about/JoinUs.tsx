"use client";

import Link from "next/link";
import { motion } from "motion/react";

const slideinanimation = {
  hidden: { opacity: 0, x: 60 },
  show: {
    opacity: 1,
    x: 0,
  },
};

const JoinUs = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center px-4 py-16 text-center"
      variants={slideinanimation}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="text-nsbe-yellow-100 mb-8 text-4xl font-bold">
        JOIN US
      </div>
      <p className="text-xl text-white">
        Join us on{" "}
        <Link
          href="https://highlanderlink.ucr.edu/organization/nsbe"
          target="_blank"
          className="text-nsbe-yellow-100 font-bold underline"
        >
          Highlander Link
        </Link>{" "}
        and get to know us by attending events posted on our Instagram!
      </p>
    </motion.div>
  );
};

export default JoinUs;
