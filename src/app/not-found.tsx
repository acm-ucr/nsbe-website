"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import gearImg from "@/public/error/Gear.webp";

const NotFound = () => {
  return (
    <div className="mt-10 flex min-h-screen flex-col items-center justify-center px-4">
      <div className="relative flex max-w-xs items-center justify-center sm:max-w-md md:max-w-none">
        <motion.div
          className="pointer-events-none"
          animate={{ rotate: 360 }}
          transition={{
            duration: 240,
            repeat: Infinity,
            ease: "easeOut",
          }}
        >
          <Image src={gearImg} alt="Gear Image" className="object-contain" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="absolute flex flex-col items-center text-center"
        >
          <div className="text-nsbe-yellow-100 text-5xl font-extrabold sm:text-6xl md:text-8xl">
            404
          </div>

          <div className="text-nsbe-yellow-100 text-lg font-bold sm:text-xl md:text-3xl">
            Page not found.
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05, duration: 0.3 }}
        whileHover={{ scale: 1.1 }}
      >
        <Link
          href="/"
          className="border-nsbe-yellow-100 text-nsbe-yellow-100 mt-10 mb-10 rounded-xl border-3 px-5 py-3 text-xl transition-opacity hover:opacity-60 sm:mt-16"
        >
          RETURN HOME
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
