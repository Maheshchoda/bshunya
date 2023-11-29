import { ParagraphProps } from "@/types";
import renderText from "./RenderText";
import LinkComponent from "./Link";

const ParagraphComponent = ({ element }: { element: ParagraphProps }) => (
  <p className="text-base text-gray-700 leading-relaxed mb-4">
    {element.children.map((child, index) => {
      if (child.type === "text") return renderText(child);
      if (child.type === "link")
        return <LinkComponent key={index} element={child} />;
    })}
  </p>
);

export default ParagraphComponent;
