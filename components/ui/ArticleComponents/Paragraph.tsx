import { ParagraphProps } from "@/types";
import renderText from "./RenderText";

const ParagraphComponent = ({ element }: { element: ParagraphProps }) => (
  <p className="text-base text-gray-700 leading-relaxed mb-4">
    {element.children.map(renderText)}
  </p>
);

export default ParagraphComponent;
