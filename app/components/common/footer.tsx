import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const year = new Date().getFullYear();
  const iconSize = 24;
  const socialLinks = [
    {
      url: "https://github.com/liamjameswatson",
      icon: <FaGithub size={iconSize} />,
    },
    {
      url: "https://x.com/liam865585",
      icon: <FaXTwitter size={iconSize} />,
    },
    {
      url: "https://www.instagram.com/",
      icon: <FaInstagram size={iconSize} />,
    },
    {
      url: "https://www.linkedin.com/in/liam-watson-a9845b257/",
      icon: <FaLinkedin size={iconSize} />,
    },
  ];

  return (
    <>
      <div className="flex-between mb-10 sm:px-8 lg:px-20 xl:px-48">
        <p className="text-md">&copy;Liam Watson {year}</p>

        <ul className="flex space-x-5 md:space-x-10">
          {socialLinks.map((link) => (
            <Link key={link.url} href={link.url}>
              {link.icon}
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Footer;
