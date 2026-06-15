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
      <div className="flex w-full flex-col gap-3 md:flex-row">
        {images.map(({ image, alt }, index) => (
          <motion.div
            key={index}
            className="border-nsbe-yellow-100 flex-1 overflow-hidden border-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <Image
              src={image}
              alt={alt}
              className="h-100 w-full object-cover transition-transform duration-200 hover:scale-105"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
