import { ImageProps } from "./ArticleProps";

export interface TextProps {
  type: "text";
  format?: number;
  text: string;
}

export interface HeadingProps {
  type: "heading";
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: TextProps[];
}

export interface ParagraphProps {
  type: "paragraph";
  children: TextProps[];
}

export interface ListItemProps {
  type: "listitem";
  children: TextProps[];
}

export interface ListProps {
  type: "list";
  listType: "number" | "bullet";
  children: ListItemProps[];
}

export interface QuoteProps {
  type: "quote";
  children: TextProps[];
}

export interface UploadProps {
  type: "upload";
  relationTo: "media";
  value: ImageProps;
}

export type ContentElementProps =
  | HeadingProps
  | ParagraphProps
  | ListProps
  | QuoteProps
  | UploadProps;

export interface ContentProps {
  root: {
    type: "root";
    children: ContentElementProps[];
  };
  direction?: "ltr";
}
