"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="p-4 bg-gray-400 text-gray-800 relative">
      <div className="container mx-auto flex  justify-center items-center">
        <Link href="/" className="text-2xl font-bold">
          bshunya
        </Link>

        <div className="hidden md:flex ml-36 space-x-32">
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

        <div className="md:hidden absolute right-4 top-4 z-50">
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
      </div>

      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-10">
          <div className="flex flex-col space-y-4">
            <a
              href="#"
              className="text-white text-3xl font-bold hover:text-gray-300"
            >
              HairCare
            </a>
            <a
              href="#"
              className="text-white text-3xl font-bold hover:text-gray-300"
            >
              SkinCare
            </a>
            <a
              href="#"
              className="text-white text-3xl font-bold hover:text-gray-300"
            >
              Diet
            </a>
            <a
              href="#"
              className="text-white text-3xl font-bold hover:text-gray-300"
            >
              Health
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
