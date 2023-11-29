import { HeadingProps } from "@/types";
import renderText from "./RenderText";
import LinkComponent from "./Link";

const Heading = ({ element }: { element: HeadingProps }) => {
  const Tag = element.tag as keyof JSX.IntrinsicElements;

  const baseStyle = "font-bold leading-tight my-2 ";
  const sizeStyles: { [key in keyof JSX.IntrinsicElements]?: string } = {
    h1: "text-3xl sm:text-4xl md:text-5xl",
    h2: "text-2xl sm:text-3xl md:text-4xl",
    h3: "text-xl sm:text-2xl md:text-3xl",
    h4: "text-lg sm:text-xl md:text-2xl",
    h5: "text-md sm:text-lg md:text-xl",
    h6: "text-sm sm:text-md md:text-lg",
  };

  const headingStyle = baseStyle + (sizeStyles[Tag] ?? "");

  return (
    <Tag className={headingStyle}>
      {element.children.map((child, index) => {
        if (child.type === "text") return renderText(child);
        if (child.type === "link")
          return <LinkComponent key={index} element={child} />;
      })}
    </Tag>
  );
};

export default Heading;
