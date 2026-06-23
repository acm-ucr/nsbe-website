"use client";

import { motion } from "framer-motion";
import NewsletterCard from "./NewsletterCard";
import placeholder from "@/public/home/placeholder.webp";
import Link from "next/link";

const newsletterInfos = [
  { name: "Resource Name", image: placeholder },
  { name: "Resource Name", image: placeholder },
  { name: "Resource Name", image: placeholder },
];

const Newsletter = () => {
  return (
    <motion.div
      className="mx-auto w-9/10 pb-8 md:w-5/6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <motion.div
        className="text-nsbe-yellow-100 mb-8 text-2xl font-bold md:text-4xl"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        OUR NEWSLETTER
      </motion.div>

      <motion.div
        className="flex flex-wrap justify-center gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
      >
        {newsletterInfos.map(({ name, image }, index) => (
          <motion.div
            key={index}
            className="w-full sm:w-[32%]"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <NewsletterCard name={name} image={image} />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="mt-10 mb-5 flex justify-center"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: "easeOut", delay: 0.2 }}
      >
        <Link
          href="https://nsbe.org/download-type/newsletter/"
          target="_blank"
          className="border-nsbe-yellow-100 text-nsbe-yellow-100 inline-block rounded-xl border-3 px-5 py-2 text-base md:text-xl"
        >
          SUBSCRIBE HERE
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Newsletter;
