import { footerData, FooterLink } from "../data/footer";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-nsbe-yellow-100 bg-nsbe-gray-50 flex items-center justify-between border-t-4 px-8 py-8">
      <span className="text-nsbe-yellow-100 font-medium">
        {footerData.orgName}
      </span>
      <div className="flex gap-4">
        {footerData.links.map((link: FooterLink, index: number) => (
          <Link
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <link.icon className="text-nsbe-yellow-100 text-3xl" />
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
