export interface Text {
  type: "text";
  text: string;
}

export interface Heading {
  type: "heading";
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: Text[];
}

export interface Paragraph {
  type: "paragraph";
  children: Text[];
}

export interface ListItem {
  type: "listitem";
  children: Text[];
}

export interface List {
  type: "list";
  listType: "number" | "bullet";
  children: ListItem[];
}

export interface Quote {
  type: "quote";
  children: Text[];
}

export interface Upload {
  type: "upload";
  value: {
    url: string;
    alt: string;
    caption: Text[];
  };
}

export type ContentElement = Heading | Paragraph | List | Quote | Upload;

interface Content {
  content: ContentElement[];
}

export default Content;
