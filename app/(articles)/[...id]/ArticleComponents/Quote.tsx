import { Quote } from "./ElementProps";
import renderText from "./RenderText";

const QuoteComponent = ({ element }: { element: Quote }) => (
  <blockquote>{element.children.map(renderText)}</blockquote>
);

export default QuoteComponent;
