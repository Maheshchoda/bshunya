import Link from "next/link";
import StyledText from "./StyledText";

type LinkProps = {
  text: string;
  url: string;
  newTab?: boolean;
};

export const LinkComponent = ({ text, url, newTab }: LinkProps) => {
  return (
    <Link href={url} target={newTab ? "_blank" : "_self"}>
      <StyledText text={text} />
    </Link>
  );
};

export default LinkComponent;
