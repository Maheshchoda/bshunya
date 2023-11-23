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
import getBase64 from "@/lib/plaiceHolder";

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

const ArticleContent = async ({ Article }: ArticleProps) => {
  const { title, image } = Article;
  const { cloud, alt } = image;
  const children = Article.content.root.children;
  const myBlurDataUrl = await getBase64(cloud.url);

  return (
    <main className="flex flex-col justify-center max-w-screen-md">
      <h1 className="text-2xl font-bold leading-tight text-gray-900 md:mt-8 lg:text-4xl lg:leading-none px-2 md:px-4">
        {title}
      </h1>
      <div className="relative my-4 md:px-4">
        <Image
          src={cloud.url}
          alt={alt}
          width={896}
          height={512}
          sizes="100vw"
          placeholder="blur"
          blurDataURL={myBlurDataUrl}
          className="object-fit"
          priority
        />
        <div className="absolute top-0 left-0 w-full h-full hover:bg-gray-100 bg-opacity-0 hover:bg-opacity-20 transition ease-in-out"></div>
      </div>
      <h2 className="text-xl font-bold leading-tight text-gray-900 my-4 md:mt-8 lg:text-2xl lg:leading-none px-4">
        {Article.caption}
      </h2>
      <article className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto px-4">
        {children.map((element: ContentElementProps, index: number) => (
          <ContentRenderer key={index} element={element} />
        ))}
      </article>
    </main>
  );
};

export default ArticleContent;
