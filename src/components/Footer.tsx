import { footerData } from "../data/footer";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-nsbe-yellow-100 bg-nsbe-gray-50 flex flex-col items-center gap-4 border-t-4 px-8 py-6 text-center md:flex-row md:justify-between md:py-8 md:text-left">
      <div className="text-nsbe-yellow-100 font-medium">
        UCR National Society of Black Engineers
      </div>
      <div className="flex gap-4">
        {footerData.map(({ icon: Icon, url }, index) => (
          <Link key={index} href={url} target="_blank">
            <Icon className="text-nsbe-yellow-100 text-3xl" />
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
