import { ImageProps } from "./ArticleProps";

type ChildElement = TextProps | LinkProps;

export interface LinkProps {
  type: "link";
  text: string;
  children: TextProps[];
  fields: {
    url: string;
    newTab: boolean;
    linkType: string;
  };
}

export interface TextProps {
  type: "text";
  format?: number;
  text: string;
}

export interface HeadingProps {
  type: "heading";
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: ChildElement[];
}

export interface ParagraphProps {
  type: "paragraph";
  children: ChildElement[];
}

export interface ListItemProps {
  type: "listitem";
  children: ChildElement[];
}

export interface ListProps {
  type: "list";
  listType: "number" | "bullet";
  children: ListItemProps[];
}

export interface QuoteProps {
  type: "quote";
  children: ChildElement[];
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
  | UploadProps
  | LinkProps;

export interface ContentProps {
  root: {
    type: "root";
    children: ContentElementProps[];
  };
  direction?: "ltr";
}
