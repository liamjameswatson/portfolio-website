"use client";

import Image from "next/image";
import Link from "next/link";
import { LuMenu, LuX } from "react-icons/lu";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  // For SideMenu on small screens
  const [open, setOpen] = useState<boolean>(false);
  const pathname = usePathname();
  console.log(pathname);

  const handleMenu = (): void => {
    setOpen((prev) => !prev);
  };

  const navLinks = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/projects", title: "Projects" },
    { url: "/contact", title: "Contact" },
  ];

  return (
    <>
      <div className="flex-between p-4 sm:px-8 lg:px-20 xl:px-48 text-xl">
        <Link href="/" className="flex">
          <Image src="/Black.svg" alt="Liam Watson" height={40} width={40} />
          <span className="hidden md:block text-2xl">Liam Watson</span>
        </Link>
        <div>
          <ul className="hidden md:flex gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                href={link.url}
                className={`${
                  link.url === pathname
                    ? " px-2 rounded-lg bg-primary-700"
                    : "px-2"
                } ${link.url === "/" ? "hidden" : ""}`}
              >
                {link.title}
              </Link>
            ))}
          </ul>
        </div>

        <button
          className="md:hidden z-50 relative hover:cursor-pointer"
          onClick={handleMenu}
        >
          {open ? (
            <LuX size={40} className="text-primary-50" />
          ) : (
            <LuMenu size={40} />
          )}
        </button>
      </div>

      {open && (
        <div>
          <ul
            className="md:hidden absolute top-0 w-screen h-screen bg-linear-to-b from-primary-700 to-primary-900
        text-secondary-50 flex-center flex-col gap-8 text-4xl z-40"
          >
            {navLinks.map((link) => (
              <Link
                key={link.title}
                href={link.url}
                className={link.url === pathname ? "hidden" : ""}
              >
                {link.title}
              </Link>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
