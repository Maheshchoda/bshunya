"use client";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const MenuIcon = dynamic(() => import("./MenuIcons"));
const NavLinks = dynamic(() => import("./NavLinks"));

const useBodyOverflow = (condition: boolean): void => {
  useEffect(() => {
    document.body.style.overflow = condition ? "hidden" : "unset";
  }, [condition]);
};

const Navbar = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);
  useBodyOverflow(menuOpen);

  const toggleMenu = (): void => setMenuOpen((prev) => !prev);
  const closeMenu = (): void => setMenuOpen(false);

  return (
    <nav className="fixed top-0 w-full z-50 py-3 sm:py-5 bg-gray-900 text-white">
      <div className="container mx-auto max-w-screen-lg flex flex-start items-center">
        <div className="md:hidden absolute right-4 top-4 z-50">
          <MenuIcon menuOpen={menuOpen} toggleMenu={toggleMenu} />
        </div>

        <Link
          href="/"
          className="mx-auto md:mx-0 text-2xl md:text-3xl font-bold"
        >
          Bshunya
        </Link>

        <div className="hidden md:flex flex-grow items-center ml-20">
          <NavLinks className="flex flex-grow space-x-24 text-xl font-bold" />
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-gray-700 opacity-100 z-40 flex items-center justify-center transition-opacity duration-1000">
          <NavLinks
            closeMenu={closeMenu}
            className="flex flex-col space-y-6 text-white text-4xl"
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
