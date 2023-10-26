import { List, ListItem } from "./ElementProps";
import renderText from "./RenderText";

const ListItemComponent = ({ element }: { element: ListItem }) => (
  <li>{element.children.map(renderText)}</li>
);

const ListComponent = ({ element }: { element: List }) => {
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
