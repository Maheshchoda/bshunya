import { QuoteBlockProps } from "./ComponentProps";

const QuoteBlock = ({ quote, author }: QuoteBlockProps) => (
  <blockquote className="p-4 mt-4 bg-gray-100 rounded-md">
    <p className="text-lg italic mb-2">"{quote}"</p>
    <cite className="block mt-2 text-gray-700">- {author}</cite>
  </blockquote>
);

export default QuoteBlock;
