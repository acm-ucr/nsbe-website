"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "motion/react";

export type GalleryImage = {
  image: StaticImageData;
  alt: string;
};

type GalleryProps = {
  images: GalleryImage[];
};

const Gallery = ({ images }: GalleryProps) => {
  return (
    <div className="flex w-full items-center justify-center py-10">
      <div className="flex w-full flex-row gap-3">
        {images.map(({ image, alt }, index) => (
          <motion.div
            key={index}
            className="border-nsbe-yellow-100 flex-1 border-2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Image
              src={image}
              alt={alt}
              className="h-100 w-full object-cover"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
