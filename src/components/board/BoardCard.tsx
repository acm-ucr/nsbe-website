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
        className="border-nsbe-yellow-100 w-[20vw] aspect-square object-cover rounded-full border-3"
      />

      <div className="flex flex-col items-center text-center gap-0.5">
        <p className="text-nsbe-yellow-100 text-2xl font-extrabold">{name}</p>
        <p className="text-white text-xl">{position}</p>
      </div>

      <Link href={linkedin} target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-nsbe-yellow-100 text-4xl hover:scale-105 hover:opacity-75" />
      </Link>
    </div>
  );
};

export default BoardCard;