import { JSONContent } from "@tiptap/core";

export type TypeService = {
  id?: number;
  title: string;
  slug: string;
  excerpt: string;
  coverImageUrl: string;
  body: JSONContent;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string[];
  tags: string[];
  status: string;
  publishedAt?: string | null;
  isPublished?: boolean;
  viewsCount?: number;
  createdAt?: string;
  updatedAt?: string;
};
