import { HeadingProps } from "@/types";
import renderText from "./RenderText";

const Heading = ({ element }: { element: HeadingProps }) => {
  const Tag = element.tag as keyof JSX.IntrinsicElements;
  return <Tag>{element.children.map(renderText)}</Tag>;
};

export default Heading;
