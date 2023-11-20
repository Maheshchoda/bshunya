import Link from "next/link";

interface NavLinksProps {
  closeMenu?: () => void;
  className?: string;
}

const NavLinks = ({ closeMenu, className }: NavLinksProps) => {
  const links = ["HairCare", "SkinCare", "EatRight", "Recipes"];

  return (
    <div className={className}>
      {links.map((link) => (
        <Link
          key={link}
          href={`/tags/${link.toLowerCase()}`}
          onClick={closeMenu}
          className="hover:text-sky-400"
        >
          {link}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
