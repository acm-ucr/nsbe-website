import { footerData } from "../data/footer";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-nsbe-yellow-100 bg-nsbe-gray-50 w-full border-t-4 px-4 py-6 sm:px-8">
      <div className="flex w-full items-center justify-between">
        <div className="text-nsbe-yellow-100 text-lg font-medium tracking-wide sm:text-xl">
          UCR NSBE
        </div>

        <div className="flex items-center gap-5 sm:gap-6">
          {footerData.map(({ icon: Icon, url }, index) => (
            <Link key={index} href={url} target="_blank">
              <Icon className="text-nsbe-yellow-100 text-2xl sm:text-3xl" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
