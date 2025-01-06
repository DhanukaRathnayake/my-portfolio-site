import { JSONContent } from "@tiptap/core";

// Models
export type TypeBlogCategory = {
  id: string;
  name: string;
  contents: TypeBlog[];
  createdAt: string;
  updatedAt: string;
};

export type TypeBlog = {
  id?: number;
  title: string;
  slug: string;
  category: any;
  author: string;
  excerpt: string;
  coverImageUrl: string;
  body: JSONContent;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string[];
  tags: string[];
  readingTime: number;
  status: string;
  publishedAt?: string | null;
  isPublished?: boolean;
  viewsCount?: number;
  version?: number;
  previousVersions?: TypeBlog[];
  createdAt?: string;
  updatedAt?: string;
};

export type BlogState = {
  blogs: TypeBlog[] | [];
  singleBlog: TypeBlog | null;
  loading: boolean;
  error: string | null;
};
