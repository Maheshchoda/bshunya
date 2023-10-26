import { Heading } from "./ElementProps";
import renderText from "./RenderText";

const Heading = ({ element }: { element: Heading }) => {
  const Tag = element.tag as keyof JSX.IntrinsicElements;
  return <Tag>{element.children.map(renderText)}</Tag>;
};

export default Heading;
