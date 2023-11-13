import { QuoteProps } from "@/types";

const QuoteComponent = ({ element }: { element: QuoteProps }) => {
  return (
    <blockquote className="px-6 py-4 italic border-l-4 bg-gray-50 text-gray-700 border-gray-300 my-5 shadow-sm">
      <p className="font-semibold text-gray-700 mb-2">Summary:</p>
      {element.children.map((item, index) => (
        <p key={index} className="leading-relaxed">
          {item.text}
        </p>
      ))}
    </blockquote>
  );
};

export default QuoteComponent;
