import React from "react";

// Define Types
interface TextNode {
  text: string;
}

interface ElementNode {
  type: string;
  tag?: string;
  children?: ElementNode[];
  textNode?: TextNode;
  value?: number;
  listType?: string;
}

// Text Component
const TextComponent = ({ textNode }: { textNode: TextNode }) => {
  return <>{textNode.text}</>;
};

// Element Components
const ElementComponent = ({ node }: { node: ElementNode }) => {
  switch (node.type) {
    case "heading":
      const HeadingTag = node.tag as keyof JSX.IntrinsicElements;
      return (
        <HeadingTag>
          {node.children &&
            node.children.map((child, index) => (
              <ElementComponent node={child} key={index} />
            ))}
        </HeadingTag>
      );

    case "paragraph":
      return (
        <p>
          {node.children &&
            node.children.map((child, index) => (
              <ElementComponent node={child} key={index} />
            ))}
        </p>
      );

    case "list":
      const ListTag = node.listType === "number" ? "ol" : "ul";
      return (
        <ListTag>
          {node.children?.map((child, index) => (
            <ElementComponent node={child} key={index} />
          ))}
        </ListTag>
      );

    case "listitem":
      return (
        <li>
          {node.children &&
            node.children.map((child, index) => (
              <ElementComponent node={child} key={index} />
            ))}
        </li>
      );

    case "quote":
      return (
        <blockquote>
          {node.children &&
            node.children.map((child, index) => (
              <ElementComponent node={child} key={index} />
            ))}
        </blockquote>
      );

    case "upload":
      // Assuming the value of the upload is the image URL
      return (
        <img src={node.value as unknown as string} alt="uploaded content" />
      );

    default:
      return null;
  }
};

const node = [
  {
    children: [
      {
        detail: 0,
        format: 0,
        mode: "normal",
        style: "",
        text: "This is the heading1",
        type: "text",
        version: 1,
      },
    ],
    direction: "ltr",
    format: "",
    indent: 0,
    type: "heading",
    version: 1,
    tag: "h1",
  },
  {
    children: [
      {
        detail: 0,
        format: 0,
        mode: "normal",
        style: "",
        text: "This is the the heading 2",
        type: "text",
        version: 1,
      },
    ],
    direction: "ltr",
    format: "",
    indent: 0,
    type: "heading",
    version: 1,
    tag: "h2",
  },
  {
    children: [
      {
        detail: 0,
        format: 0,
        mode: "normal",
        style: "",
        text: "This is the heading 3",
        type: "text",
        version: 1,
      },
    ],
    direction: "ltr",
    format: "",
    indent: 0,
    type: "heading",
    version: 1,
    tag: "h3",
  },
  {
    children: [
      {
        detail: 0,
        format: 0,
        mode: "normal",
        style: "",
        text: "This is the heading 4",
        type: "text",
        version: 1,
      },
    ],
    direction: "ltr",
    format: "",
    indent: 0,
    type: "heading",
    version: 1,
    tag: "h4",
  },
  {
    children: [
      {
        detail: 0,
        format: 0,
        mode: "normal",
        style: "",
        text: "This is  the heading 5",
        type: "text",
        version: 1,
      },
    ],
    direction: "ltr",
    format: "",
    indent: 0,
    type: "heading",
    version: 1,
    tag: "h5",
  },
  {
    children: [
      {
        detail: 0,
        format: 0,
        mode: "normal",
        style: "",
        text: "THis is the heading 6",
        type: "text",
        version: 1,
      },
    ],
    direction: "ltr",
    format: "",
    indent: 0,
    type: "heading",
    version: 1,
    tag: "h6",
  },
  {
    children: [],
    direction: null,
    format: "",
    indent: 0,
    type: "paragraph",
    version: 1,
  },
  {
    children: [
      {
        children: [
          {
            detail: 0,
            format: 0,
            mode: "normal",
            style: "",
            text: "Ordered List ",
            type: "text",
            version: 1,
          },
        ],
        direction: "ltr",
        format: "",
        indent: 0,
        type: "listitem",
        version: 1,
        value: 1,
      },
      {
        children: [
          {
            detail: 0,
            format: 0,
            mode: "normal",
            style: "",
            text: "element two",
            type: "text",
            version: 1,
          },
        ],
        direction: "ltr",
        format: "",
        indent: 0,
        type: "listitem",
        version: 1,
        value: 2,
      },
    ],
    direction: "ltr",
    format: "",
    indent: 0,
    type: "list",
    version: 1,
    listType: "number",
    start: 1,
    tag: "ol",
  },
  {
    children: [
      {
        children: [
          {
            detail: 0,
            format: 0,
            mode: "normal",
            style: "",
            text: "This is the unordered list",
            type: "text",
            version: 1,
          },
        ],
        direction: "ltr",
        format: "",
        indent: 0,
        type: "listitem",
        version: 1,
        value: 1,
      },
      {
        children: [
          {
            detail: 0,
            format: 0,
            mode: "normal",
            style: "",
            text: "Element two",
            type: "text",
            version: 1,
          },
        ],
        direction: "ltr",
        format: "",
        indent: 0,
        type: "listitem",
        version: 1,
        value: 2,
      },
    ],
    direction: "ltr",
    format: "",
    indent: 0,
    type: "list",
    version: 1,
    listType: "bullet",
    start: 1,
    tag: "ul",
  },
  {
    children: [
      {
        detail: 0,
        format: 0,
        mode: "normal",
        style: "",
        text: "This is the block quote my dear friend.",
        type: "text",
        version: 1,
      },
    ],
    direction: "ltr",
    format: "",
    indent: 0,
    type: "quote",
    version: 1,
  },
  {
    children: [],
    direction: null,
    format: "",
    indent: 0,
    type: "paragraph",
    version: 1,
  },
  {
    format: "",
    type: "upload",
    version: 1,
    fields: null,
    relationTo: "media",
    value: {
      id: "6537be4566e30d8b339a478a",
    },
  },
  {
    children: [],
    direction: null,
    format: "",
    indent: 0,
    type: "paragraph",
    version: 1,
  },
];
ElementComponent(node);
