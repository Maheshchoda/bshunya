import { StaticImageData } from "next/image";

export type TextBlockProps = {
  type: "TextBlock";
  title: string;
  content: string;
};

export type ImageBlockProps = {
  type: "ImageBlock";
  src: StaticImageData;
  alt: string;
  caption?: string;
};

export type QuoteBlockProps = {
  type: "QuoteBlock";
  quote: string;
  author: string;
};

export type ComponentProps = TextBlockProps | ImageBlockProps | QuoteBlockProps;

interface ArticleData {
  title: string;
  components: ComponentProps[];
}

export default ArticleData;
