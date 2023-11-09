import Content, { ContentElement } from "./ContentProps";

export interface Image {
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

export interface Author {
  id: string;
  name: string;
  bio: Content;
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface Tag {
  tag: string;
  id: string;
}

export interface Meta {
  title: string;
  description: string;
  image: Image;
}

export interface Article {
  _id: string;
  articleRef: string;
  authorId: Author;
  categories: Category[];
  content: Content;
  id: string;
  image: Image;
  title: string;
  slug: string;
  tags: Tag[];
  cloud: {
    url: string;
    expiration: string;
  };
  isHeroArticle: boolean;
  isRecommended: boolean;
  isTrending: boolean;
  viewsCount: number;
  meta: Meta;
  createdAt: string;
  updatedAt: string;
}
