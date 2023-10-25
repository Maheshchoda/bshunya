import StyledText from "./StyledText";

type ListProps = {
  items: string[];
  ordered: boolean;
};

const List = ({ items, ordered }: ListProps) => {
  const Tag = ordered ? "ol" : "ul";
  return (
    <Tag>
      {items.map((item, index) => (
        <li key={index}>
          <StyledText text={item} />
        </li>
      ))}
    </Tag>
  );
};

export default List;
