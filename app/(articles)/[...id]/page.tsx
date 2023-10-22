import ArticleTemplate from "./ArticleTemplate";
import ArticleData, {
  TextBlockProps,
  ImageBlockProps,
  QuoteBlockProps,
} from "./Articles/ComponentProps";

import articleImage from "@/public/images/Screenshot 2023-10-21 at 7.51.23 PM.png";

const articleData: ArticleData = {
  title: "Your Article Title",
  components: [
    {
      type: "TextBlock",
      title: "This is the Title of this Article",
      content: "Your text content here.",
    } as TextBlockProps,
    {
      type: "ImageBlock",
      src: articleImage,
      alt: "Image description",
    } as ImageBlockProps,
    {
      type: "QuoteBlock",
      quote: "Your quote here.",
      author: "Author name",
    } as QuoteBlockProps,
    {
      type: "TextBlock",
      title: "This is the Title of this Article",
      content: "Your text content here.",
    } as TextBlockProps,
  ],
};

const ArticlePage = () => {
  return <ArticleTemplate articleData={articleData} />;
};

export default ArticlePage;
