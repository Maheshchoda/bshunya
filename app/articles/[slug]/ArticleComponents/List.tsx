import { ListProps, ListItemProps } from "@/types";
import renderText from "./RenderText";

const ListItemComponent = ({ element }: { element: ListItemProps }) => (
  <li>{element.children.map(renderText)}</li>
);

const ListComponent = ({ element }: { element: ListProps }) => {
  const Tag = element.listType === "number" ? "ol" : "ul";
  return (
    <Tag>
      {element.children.map((item, index) => (
        <ListItemComponent key={index} element={item} />
      ))}
    </Tag>
  );
};

export default ListComponent;
