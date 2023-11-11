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
    <main className="mx-auto max-w-screen-lg px-4 lg:px-0">
      <h1 className="text-2xl font-bold leading-tight text-gray-900 mt-6 md:mt-8 lg:text-4xl lg:leading-none">
        {title}
      </h1>
      <div className="my-4 md:my-6">
        <Image
          src={cloud.url}
          alt={alt}
          width={width}
          height={height}
          className="rounded-lg w-full object-cover"
        />
      </div>
      <article className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto">
        {children.map((element: ContentElementProps, index: number) => (
          <ContentRenderer key={index} element={element} />
        ))}
      </article>
    </main>
  );
};

export default ArticleContent;
