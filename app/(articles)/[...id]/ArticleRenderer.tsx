import React from "react";
import {
  ContentElement,
  Heading,
  Image,
  List,
  Paragraph,
  Quote,
} from "./ArticleComponents";

const ContentRenderer = ({ element }: { element: ContentElement }) => {
  switch (element.type) {
    case "heading":
      return <Heading element={element} />;
    case "paragraph":
      return <Paragraph element={element} />;
    case "list":
      return <List element={element} />;
    case "quote":
      return <Quote element={element} />;
    case "upload":
      return <Image element={element} />;
    default:
      return null;
  }
};

const ArticleContent = ({
  content,
}: {
  content: { root: { children: ContentElement[] } };
}) => (
  <div>
    {content.root.children.map((element, index) => (
      <ContentRenderer key={index} element={element} />
    ))}
  </div>
);

export default ArticleContent;
