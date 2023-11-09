import { QuoteProps } from "@/types";
import renderText from "./RenderText";

const QuoteComponent = ({ element }: { element: QuoteProps }) => (
  // <blockquote>{element.children.map(renderText)}</blockquote>
  <blockquote></blockquote>
);

export default QuoteComponent;
