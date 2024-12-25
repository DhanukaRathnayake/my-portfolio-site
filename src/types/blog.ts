// Models
export type TypeBlogCategory = {
  id: string;
  name: string;
  contents: TypeBlog[];
  createdAt: string;
  updatedAt: string;
};

export type TypeBlog = {
  id: string;
  title: string;
  body: JSON;
  category: TypeBlogCategory;
  metaDescription: string;
  metaKeywords: string;
  metaTitle: string;
  slug: string;
  status: string;
  isPublished: boolean;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
};

export type BlogState = {
  blogs: TypeBlog[] | null;
  singleBlog: TypeBlog | null;
  loading: boolean;
  error: string | null;
};
