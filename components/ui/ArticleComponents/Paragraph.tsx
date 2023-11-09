import { ParagraphProps } from "@/types";
import renderText from "./RenderText";

const ParagraphComponent = ({ element }: { element: ParagraphProps }) => (
  <p>{element.children.map(renderText)}</p>
);

export default ParagraphComponent;
