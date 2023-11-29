import { QuoteProps } from "@/types";
import LinkComponent from "./Link";
import renderText from "./RenderText";

const QuoteComponent = ({ element }: { element: QuoteProps }) => {
  return (
    <blockquote className="px-6 py-4 italic border-l-4 bg-gray-50 text-gray-700 border-gray-300 my-5 shadow-sm">
      <p className="font-semibold text-gray-700 mb-2">Summary:</p>
      {element.children.map((child, index) => {
        if (child.type === "text") return renderText(child);

        if (child.type == "link")
          return <LinkComponent key={index} element={child} />;
      })}
    </blockquote>
  );
};

export default QuoteComponent;
