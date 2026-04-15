import { footerData, FooterLink } from "../data/footer";
const Footer = () => {
  return (
    <footer className="flex items-center justify-between border-t-4 border-nsbe-yellow-100 bg-nsbe-gray-50 px-8 py-8">
      <span className="font-medium text-nsbe-yellow-100">{footerData.orgName}</span>
      <div className="flex gap-4">
        {footerData.links.map((link: FooterLink, index: number) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <link.icon className="text-3xl text-nsbe-yellow-100" />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
