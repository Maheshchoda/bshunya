import Image from "next/image";
import { FC } from "react";

interface Article {
  image: string;
  title: string;
  content: string;
  tags: string[];
}

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: FC<ArticleCardProps> = ({ article }) => {
  return (
    <div className="flex max-w-screen-lg mx-auto my-4 p-4 border rounded">
      <div className="flex-shrink-0 w-3/10">
        <Image
          src={article.image}
          width={200}
          height={200}
          alt={article.title}
        />
      </div>
      <div className="w-7/10 pl-4">
        <h2 className="text-xl font-bold">{article.title}</h2>
        <p className="text-gray-700">{article.content}</p>
        <div className="flex flex-wrap">
          {article.tags.map((tag, index) => (
            <span key={index} className="m-1 text-sm text-gray-500">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
