import React from "react";
import {
  Heading,
  ImageComponent,
  List,
  Paragraph,
  Quote,
} from "@/components/ui/ArticleComponents";
import Image from "next/image";
import { ArticleProps, ContentElementProps } from "@/types";

const ContentRenderer = ({ element }: { element: ContentElementProps }) => {
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
      return <ImageComponent element={element} />;
    default:
      return null;
  }
};

const ArticleContent = ({ Article }: ArticleProps) => {
  const { title, image } = Article;
  const { cloud, alt, width, height } = image;
  const children = Article.content.root.children;
  return (
    <div>
      <h1>{title}</h1>
      <Image src={cloud.url} alt={alt} width={width} height={height} />
      {children.map((element: ContentElementProps, index: number) => (
        <ContentRenderer key={index} element={element} />
      ))}
    </div>
  );
};

export default ArticleContent;
