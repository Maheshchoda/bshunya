import ContentElement from "./ContentProps";

export interface Image {
  id: string;
  alt: string;
  filename: string;
  mimeType: string;
  filesize: number;
  width: number;
  height: number;
  createdAt: string;
  updatedAt: string;
  url: string;
  caption: ContentElement[];
}

export interface Author {
  id: string;
  name: string;
  bio: ContentElement;
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
  id: string;
  title: string;
  slug: string;
  authorId: Author;
  createdAt: string;
  updatedAt: string;
  categories: Category[];
  tags: Tag[];
  image: Image;
  isHeroArticle: boolean;
  viewsCount: number;
  meta: Meta;
}
