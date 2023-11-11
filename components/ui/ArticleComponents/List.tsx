import { ListProps, ListItemProps } from "@/types";
import renderText from "./RenderText";

const ListItemComponent = ({ element }: { element: ListItemProps }) => (
  <li className="mb-2 text-gray-700 leading-relaxed">
    {element.children.map(renderText)}
  </li>
);

const ListComponent = ({ element }: { element: ListProps }) => {
  const isOrdered = element.listType === "number";
  const listStyleClass = isOrdered
    ? "list-decimal list-inside"
    : "list-disc list-inside";

  const Tag = isOrdered ? "ol" : "ul";
  return (
    <Tag className={`space-y-2 my-4 ${listStyleClass}`}>
      {element.children.map((item, index) => (
        <ListItemComponent key={index} element={item} />
      ))}
    </Tag>
  );
};

export default ListComponent;
