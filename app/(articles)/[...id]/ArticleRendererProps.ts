type TextContent = {
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  code?: boolean;
};

type ListItem = {
  type: "li";
  children: TextContent[];
};

type LinkContent = {
  type: "link";
  text: string;
  url: string;
  newTab?: boolean;
};

type ImageContent = {
  type: "upload";
  value: {
    id: string;
    alt: string;
    filename: string;
    mimeType: string;
    filesize: number;
    width: number;
    height: number;
    createdAt: string;
    updatedAt: string;
    url: string;
    caption?: TextContent[];
  };
};

// Discriminant union type for ContentBlock
type ContentBlock =
  | {
      type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
      children: TextContent[];
    }
  | { type: "ul" | "ol"; children: ListItem[] }
  | { type: "link"; children: LinkContent[] }
  | { type: "upload"; children: ImageContent[] };

type ArticleRendererProps = {
  content: ContentBlock[];
};

export default ArticleRendererProps;
