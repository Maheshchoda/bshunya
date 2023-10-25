import StyledText from "./StyledText";

type HeadingProps = {
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  text: string;
};

const Heading = ({ level, text }: HeadingProps) => {
  const Tag = `${level}` as keyof JSX.IntrinsicElements;
  return (
    <Tag>
      <StyledText text={text} />
    </Tag>
  );
};

export default Heading;
