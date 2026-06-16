"use client";

import BoardCard from "@/components/board/BoardCard";
import board from "@/data/board";
import { motion } from "motion/react";

const slidedownanimation = {
  hidden: { opacity: 0, y: -60, scale: 0.85 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};

const getCardAnimation = (index: number) => ({
  transition: { duration: 0.6, delay: index * 0.1, ease: "easeOut" as const },
  viewport: { once: true, amount: 0.3 },
  initial: "hidden",
  whileInView: "show",
  whileHover: { scale: 1.05, transition: { duration: 0.2, delay: 0 } },
});

const BoardGrid = () => {
  return (
    <div className="flex flex-col items-center gap-4 px-2 py-16 md:px-6">
      <p className="text-nsbe-yellow-100 text-center text-3xl font-extrabold md:text-5xl">
        MEET THE BOARD
      </p>
      <p className="text-nsbe-yellow-100 mb-10 text-center text-xl font-extrabold md:text-3xl">
        2026 - 2027
      </p>
      <div className="grid w-full grid-cols-1 justify-items-center gap-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-30">
        {board.map(({ image, name, position, linkedin }, index) => (
          <motion.div
            key={index}
            variants={slidedownanimation}
            {...getCardAnimation(index)}
          >
            <BoardCard
              image={image}
              name={name}
              position={position}
              linkedin={linkedin}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BoardGrid;
