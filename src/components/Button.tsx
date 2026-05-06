import Link from "next/link";

interface ButtonProps {
  text: string;
  href: string;
}

const Button = ({ text, href }: ButtonProps) => {
  return (
    <Link href={href}>
      <button className="text-nsbe-yellow-100 border-nsbe-yellow-100 cursor-pointer rounded-lg border-2 px-6 py-3 uppercase">
        <div> {text} </div>
      </button>
    </Link>
  );
};

export default Button;
