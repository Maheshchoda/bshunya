import { Paragraph } from "./ElementProps";
import renderText from "./RenderText";

const ParagraphComponent = ({ element }: { element: Paragraph }) => (
  <p>{element.children.map(renderText)}</p>
);

export default ParagraphComponent;
