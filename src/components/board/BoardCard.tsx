import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

type BoardCardProps = {
  image: StaticImageData;
  name: string;
  position: string;
  linkedin: string;
};

const BoardCard = ({ image, name, position, linkedin }: BoardCardProps) => {
  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl">
      <Image
        src={image}
        alt={name}
        className="border-nsbe-yellow-100 aspect-square w-3/5 rounded-full border-4 object-cover"
      />

      <div className="flex flex-col items-center gap-0.5 text-center">
        <p className="text-nsbe-yellow-100 text-lg font-extrabold md:text-xl lg:text-2xl">
          {name}
        </p>
        <p className="text-sm text-white md:text-lg lg:text-xl">{position}</p>
      </div>

      <Link href={linkedin} target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-nsbe-yellow-100 text-4xl transition-all duration-100 hover:scale-105 hover:opacity-75" />
      </Link>
    </div>
  );
};

export default BoardCard;
