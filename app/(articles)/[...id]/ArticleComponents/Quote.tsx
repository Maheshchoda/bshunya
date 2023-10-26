import { Quote } from "./ContentProps";
import renderText from "./RenderText";

const QuoteComponent = ({ element }: { element: Quote }) => (
  <blockquote>{element.children.map(renderText)}</blockquote>
);

export default QuoteComponent;
