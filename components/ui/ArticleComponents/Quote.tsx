import { QuoteProps } from "@/types";

const QuoteComponent = ({ element }: { element: QuoteProps }) => {
  return (
    <blockquote className="p-4 italic border-l-4 bg-gray-100 text-gray-600 border-gray-500 my-4">
      {element.children.map((item, index) => (
        <p key={index}>{item.text}</p>
      ))}
    </blockquote>
  );
};

export default QuoteComponent;
