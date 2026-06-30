import Image, { StaticImageData } from "next/image";

interface NewsletterCardProps {
  image: StaticImageData;
  name: string;
}

const NewsletterCard = ({ image, name }: NewsletterCardProps) => {
  return (
    <div className="bg-nsbe-gray-50 flex w-90 flex-col overflow-hidden rounded-lg p-4 shadow-xl">
      <div className="relative h-60 w-full">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
      <p className="mt-2 mb-8 py-1 pb-8 text-sm text-white">{name}</p>
    </div>
  );
};

export default NewsletterCard;
