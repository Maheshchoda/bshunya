type StyledTextProps = {
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  code?: boolean;
};

const StyledText = ({
  text,
  bold,
  italic,
  underline,
  strikethrough,
  code,
}: StyledTextProps) => {
  const classes = [
    bold ? "font-bold" : "",
    italic ? "italic" : "",
    underline ? "underline" : "",
    strikethrough ? "line-through" : "",
    code ? "font-mono" : "",
  ].join(" ");

  return <span className={classes}>{text}</span>;
};

export default StyledText;
