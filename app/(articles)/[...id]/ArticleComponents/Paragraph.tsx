import StyledText from "./StyledText";

type ParagraphProps = {
  text: string;
};

const Paragraph = ({ text }: ParagraphProps) => {
  return (
    <p>
      <StyledText text={text} />
    </p>
  );
};

export default Paragraph;
