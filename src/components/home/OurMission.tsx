"use client";

import Link from "next/link";
import { motion } from "motion/react";

const OurMission = () => {
  return (
    <div className="bg-nsbe-black-100 flex flex-col items-center justify-center px-8 py-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-nsbe-yellow-100 mb-6 text-2xl font-bold md:text-3xl"
      >
        OUR MISSION
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-nsbe-yellow-100 max-w-4xl text-lg md:text-xl"
      >
        As the organization has grown, advancing the professional prospects and
        development of Black engineers, our purpose has remained the same.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-nsbe-yellow-100 max-w-4xl text-lg md:text-xl"
      >
        We aim "to increase the number of culturally responsible Black Engineers
        who excel academically, succeed professionally, and positively impact
        the community".
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay: 0.6 },
        }}
        whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
        viewport={{ once: true }}
        className="mt-12"
      >
        <Link
          href="https://nsbe.org"
          target="_blank"
          className="border-nsbe-yellow-100 text-nsbe-yellow-100 inline-block rounded-xl border-3 px-5 py-2 text-base md:text-xl"
        >
          LEARN MORE
        </Link>
      </motion.div>
    </div>
  );
};

export default OurMission;
