import { TextBlock, ImageBlock, QuoteBlock, ArticleData } from "./Articles";

interface ArticleTemplateProps {
  articleData: ArticleData;
}

const ArticleTemplate = ({ articleData }: ArticleTemplateProps) => (
  <div className="max-w-2xl mx-auto">
    <h1 className="text-3xl font-bold mb-4">{articleData.title}</h1>
    {articleData.components.map((component, index) => {
      switch (component.type) {
        case "TextBlock":
          return (
            <TextBlock
              key={index}
              type={component.type}
              title={component.title}
              content={component.content}
            />
          );
        case "ImageBlock":
          return (
            <ImageBlock
              key={index}
              type={component.type}
              src={component.src}
              alt={component.alt}
              caption={component.caption}
            />
          );
        case "QuoteBlock":
          return (
            <QuoteBlock
              type={component.type}
              key={index}
              quote={component.quote}
              author={component.author}
            />
          );
        default:
          return null;
      }
    })}
  </div>
);

export default ArticleTemplate;
