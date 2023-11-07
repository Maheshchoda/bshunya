"use client";
import { FaBars, FaTimes } from "react-icons/fa";

interface MenuIconProps {
  menuOpen: boolean;
  toggleMenu: () => void;
}

const MenuIcon = ({ menuOpen, toggleMenu }: MenuIconProps) => (
  <button
    onClick={toggleMenu}
    className={
      menuOpen
        ? "text-white text-2xl"
        : "text-gray-800 text-2xl hover:text-gray-600"
    }
  >
    {menuOpen ? <FaTimes /> : <FaBars />}
  </button>
);

export default MenuIcon;
