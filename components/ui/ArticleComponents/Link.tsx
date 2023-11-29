import Link from "next/link";
import StyledText from "./StyledText";
import { LinkProps } from "@/types";

export const LinkComponent = ({ element }: { element: LinkProps }) => {
  const { text, fields } = element;

  return (
    <Link
      href={fields.url}
      passHref
      className="custom-link"
      target={fields.newTab ? "_blank" : "_self"}
      rel={fields.newTab ? "noopener noreferrer" : undefined}
    >
      <StyledText text={text} />
    </Link>
  );
};

export default LinkComponent;
