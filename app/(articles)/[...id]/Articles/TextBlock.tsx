import { TextBlockProps } from "./ComponentProps";

const TextBlock = ({ title, content }: TextBlockProps) => (
  <div className="p-4 space-y-4">
    {title && <h2 className="text-2xl font-semibold">{title}</h2>}
    <p className="text-lg text-gray-800">{content}</p>
  </div>
);

export default TextBlock;
