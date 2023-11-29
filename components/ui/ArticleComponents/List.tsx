import { ListProps, ListItemProps } from "@/types";
import renderText from "./RenderText";
import LinkComponent from "./Link";

const ListItemComponent = ({ element }: { element: ListItemProps }) => (
  <li className="mb-3 text-gray-700 text-base leading-relaxed">
    {element.children.map((child, index) => {
      if (child.type === "text") return renderText(child);
      if (child.type === "link")
        return <LinkComponent key={index} element={child} />;
    })}
  </li>
);

const ListComponent = ({ element }: { element: ListProps }) => {
  const isOrdered = element.listType === "number";
  const listStyleClass = isOrdered
    ? "list-decimal list-outside pl-4 md:pl-6"
    : "list-disc list-outside pl-4 md:pl-6";

  const Tag = isOrdered ? "ol" : "ul";
  return (
    <Tag className={`space-y-2 my-5 ${listStyleClass}`}>
      {element.children.map((item, index) => (
        <ListItemComponent key={index} element={item} />
      ))}
    </Tag>
  );
};

export default ListComponent;
