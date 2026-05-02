import Link from "next/link";

interface ButtonProps {
  text: string;
  href: string;
}

const Button = ({ text, href }: ButtonProps) => {
  return (
    <Link href={href}>
      <button className="text-nsbe-yellow-400 rounded-lg border-2 border-yellow-400 px-6 py-3 font-semibold tracking-wide uppercase">
        <div> {text} </div>
      </button>
    </Link>
  );
};

export default Button;
