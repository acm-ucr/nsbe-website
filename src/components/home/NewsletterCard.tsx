import Image, { StaticImageData } from "next/image";

interface NewsletterCardProps {
  image: StaticImageData;
  name: string;
}

const NewsletterCard = ({ image, name }: NewsletterCardProps) => {
  return (
    <div className="bg-nsbe-gray-50 flex w-50 flex-col overflow-hidden rounded-xl p-4">
      <div className="relative h-40 w-full">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
      <p className="mt-2 px-1 py-1 pb-8 text-sm text-white">{name}</p>
    </div>
  );
};

export default NewsletterCard;
