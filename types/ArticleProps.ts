import { ContentProps } from "./ContentProps";

export interface ImageProps {
  id: string;
  alt: string;
  cloud: {
    url: string;
    expiration: string;
  };
  filename: string;
  mimeType: string;
  filesize: number;
  width: number;
  height: number;
  createdAt: string;
  updatedAt: string;
  url: string;
  caption?: string;
}

export interface AuthorProps {
  id: string;
  name: string;
  bio: ContentProps;
  createdAt: string;
  updatedAt: string;
}

export interface CategoryProps {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface TagProps {
  tag: string;
  id: string;
}

export interface MetaProps {
  title: string;
  description: string;
  image: ImageProps;
}

export interface ArticleDataProps {
  _id: string;
  articleRef: string;
  authorId: AuthorProps;
  categories: CategoryProps[];
  content: ContentProps;
  id: string;
  image: ImageProps;
  title: string;
  caption: string;
  slug: string;
  tags: TagProps[];
  cloud: {
    url: string;
    expiration: string;
  };
  isHeroArticle: boolean;
  isRecommended: boolean;
  isTrending: boolean;
  viewsCount: number;
  meta: MetaProps;
  createdAt: string;
  updatedAt: string;
}

export interface ArticleProps {
  Article: ArticleDataProps;
}
