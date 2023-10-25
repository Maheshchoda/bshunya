import Image from "next/image";
import { Heading, Link, List, Paragraph } from "./ArticleComponents";
import ArticleRendererProps from "./ArticleRendererProps";

export const ArticleRenderer = ({ content }: ArticleRendererProps) => {
  return (
    <div>
      {content.map((block, index) => {
        switch (block.type) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return (
              <Heading
                key={index}
                level={block.type}
                text={block.children[0].text}
              />
            );
          case "p":
            return <Paragraph key={index} text={block.children[0].text} />;
          case "ul":
          case "ol":
            const items = block.children.map((item) => item.children[0].text);
            return (
              <List key={index} items={items} ordered={block.type === "ol"} />
            );
          case "upload":
            const { url, alt } = block.children[0].value;
            return <Image key={index} src={url} alt={alt} />;
          case "link":
            const linkContent = block.children[0];
            return (
              <Link
                key={index}
                textChildren={linkContent.children}
                url={linkContent.url}
                newTab={linkContent.newTab}
              />
            );
          default:
            const defaultBlock = block as { children?: [{ text: string }] };
            if (
              defaultBlock.children &&
              defaultBlock.children[0] &&
              "text" in defaultBlock.children[0]
            ) {
              return (
                <Paragraph key={index} text={defaultBlock.children[0].text} />
              );
            }
            return null;
        }
      })}
    </div>
  );
};
