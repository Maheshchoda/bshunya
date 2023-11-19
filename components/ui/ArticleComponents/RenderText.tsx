import { TextProps } from "@/types";

const renderText = (element: TextProps) => {
  //key should be updated if the data is going to re-ordered, deleted, or added. For now this logic works
  let key = `${Date.now()}-${Math.random()}`;
  switch (element.format) {
    case 1: // Bold
      return (
        <span key={key} className="font-bold">
          {element.text}
        </span>
      );
    case 2: // Italic
      return (
        <span key={key} className="italic">
          {element.text}
        </span>
      );
    default: // No formatting
      return <span key={key}>{element.text}</span>;
  }
};

export default renderText;
