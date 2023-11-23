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
        : "text-white-800 text-2xl hover:text-blue-600"
    }
    aria-label={menuOpen ? "Close menu" : "Open menu"}
  >
    {menuOpen ? <FaTimes /> : <FaBars />}
  </button>
);

export default MenuIcon;
