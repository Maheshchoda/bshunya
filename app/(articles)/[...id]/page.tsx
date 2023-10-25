// import ArticleTemplate from "./ArticleRenderer";
// import ArticleData, {
//   TextBlockProps,
//   ImageBlockProps,
//   QuoteBlockProps,
// } from "./Articles/components";

// import articleImage from "@/public/images/Screenshot 2023-10-21 at 7.51.23 PM.png";

// const articleData: ArticleData = {
//   title: "Your Article Title",
//   components: [
//     {
//       type: "TextBlock",
//       title: "This is the Title of this Article",
//       content: "Your text content here.",
//     } as TextBlockProps,
//     {
//       type: "ImageBlock",
//       src: articleImage,
//       alt: "Image description",
//     } as ImageBlockProps,
//     {
//       type: "QuoteBlock",
//       quote: "Your quote here.",
//       author: "Author name",
//     } as QuoteBlockProps,
//     {
//       type: "TextBlock",
//       title: "This is the Title of this Article",
//       content: "Your text content here.",
//     } as TextBlockProps,
//   ],
// };

// const ArticlePage = () => {
//   return <ArticleTemplate articleData={articleData} />;
// };

// export default ArticlePage;

import { ArticleRenderer } from "./ArticleRenderer";
import ArticleRendererProps from "./ArticleRendererProps";

const articleContent: ArticleRendererProps = {
  content: [
    { children: [{ text: "But are you eating right?" }], type: "h1" },
    { children: [{ text: "But are you eating right?" }], type: "h2" },
    { children: [{ text: "But are you eating right?" }], type: "h3" },
    { children: [{ text: "But are you eating right?" }], type: "h4" },
    { children: [{ text: "But are you eating right?" }], type: "h5" },
    { children: [{ text: "But are you eating right?" }], type: "h6" },
    { children: [{ text: "Here are the List of elements to check." }] },
    {
      children: [
        { children: [{ text: "Are you eating packed food?" }], type: "li" },
        { children: [{ text: "Are you eating frozen food?" }], type: "li" },
      ],
      type: "ul",
    },
    {
      children: [
        {
          type: "li",
          children: [{ text: "Stop eating frozen food right now" }],
        },
        {
          children: [
            { text: "Never eat packed foods from your nearest store." },
          ],
          type: "li",
        },
      ],
      type: "ol",
    },
    {
      children: [
        {
          children: [{ text: "Google " }],
          linkType: "custom",
          newTab: true,
          type: "link",
          url: "https://www.google.com",
        },
      ],
    },
    {
      children: [{ text: "" }],
      relationTo: "media",
      type: "upload",
      value: {
        id: "6537be4566e30d8b339a478a",
        alt: "a man with bun sitting near the beach",
        filename: "stable-diffusion-xl.jpg",
        mimeType: "image/jpeg",
        filesize: 155146,
        width: 1024,
        height: 1024,
        createdAt: "2023-10-24T12:53:25.977Z",
        updatedAt: "2023-10-25T03:31:55.912Z",
        url: "/media/stable-diffusion-xl.jpg",
        caption: [
          { children: [{ text: "a man with bun sitting near the beach" }] },
        ],
      },
    },
    { children: [{ text: "this is bold text", bold: true }] },
    { children: [{ text: "this is Italic Text", italic: true }] },
    {
      children: [{ bold: true, italic: true, text: "this is bold and Italic" }],
    },
    { children: [{ text: "This is underlined text.", underline: true }] },
    {
      children: [
        {
          text: "This is bold, italic and also underlined text.",
          bold: true,
          italic: true,
          underline: true,
        },
      ],
    },
    { children: [{ text: "This is Strike off text.", strikethrough: true }] },
    {
      children: [
        {
          text: "This is bold, italic, underline and stike of text",
          bold: true,
          italic: true,
          underline: true,
          strikethrough: true,
        },
      ],
    },
    { children: [{ text: "This is some text with more space.", code: true }] },
  ],
};

const ArticlePage = () => {
  return (
    <div>
      <ArticleRenderer content={articleContent} />
    </div>
  );
};

export default ArticlePage;
