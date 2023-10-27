import React from "react";
import {
  Content,
  Heading,
  Image,
  List,
  Paragraph,
  Quote,
} from "./ArticleComponents";
import { ContentElement } from "./ArticleComponents/ContentProps";

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

const ArticleContent = ({ content }: Content) => {
  return (
    <div>
      {content.map((element, index) => (
        <ContentRenderer key={index} element={element} />
      ))}
    </div>
  );
};

export default ArticleContent;
