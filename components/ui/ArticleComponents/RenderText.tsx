import { TextProps } from "@/types";

const renderText = (element: TextProps, index?: number) => {
  // Generate a key only if index is provided
  let key = index != null ? `text-${index}` : undefined;
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
