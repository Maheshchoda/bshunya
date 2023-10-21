"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 p-4 bg-gray-400 text-gray-800">
      <div className="container mx-auto max-w-screen-lg flex justify-between items-center">
        <div className="md:hidden absolute left-4 top-4 z-50">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={
              menuOpen
                ? "text-white text-2xl"
                : "text-gray-800 text-2xl hover:text-gray-600"
            }
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <Link href="/" className="mx-auto md:mx-0 text-2xl font-bold">
          bshunya
        </Link>

        <div className="hidden md:flex space-x-4 md:ml-10">
          <Link href="/haircare" className="hover:text-gray-600">
            HairCare
          </Link>
          <Link href="/skincare" className="hover:text-gray-600">
            SkinCare
          </Link>
          <Link href="/diet" className="hover:text-gray-600">
            Diet
          </Link>
          <Link href="/health" className="hover:text-gray-600">
            Health
          </Link>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-black opacity-100 z-40 flex items-center justify-center transition-opacity duration-1000">
          <div className="flex flex-col space-y-4 text-white text-3xl">
            <Link href="/haircare" onClick={closeMenu}>
              HairCare
            </Link>
            <Link href="/skincare" onClick={closeMenu}>
              SkinCare
            </Link>
            <Link href="/diet" onClick={closeMenu}>
              Diet
            </Link>
            <Link href="/health" onClick={closeMenu}>
              Health
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
