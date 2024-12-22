export const GET_BLOGS_LOADING = "GET_BLOGS_LOADING";
export const GET_BLOGS_SUCCESS = "GET_BLOGS_SUCCESS";
export const GET_BLOGS_FAIL = "GET_BLOGS_FAIL";

export const GET_SINGLE_BLOG_LOADING = "GET_SINGLE_BLOG_LOADING";
export const GET_SINGLE_BLOG_SUCCESS = "GET_SINGLE_BLOG_SUCCESS";
export const GET_SINGLE_BLOG_FAIL = "GET_SINGLE_BLOG_FAIL";

export type Blog = {
  id: string;
  title: string;
  body: JSON;
  category: {
    id: string;
    name: string;
  };
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

export interface GetBlogsLoading {
  type: typeof GET_BLOGS_LOADING;
}

export interface GetBlogsSuccess {
  type: typeof GET_BLOGS_SUCCESS;
  payload: Blog[];
}

export interface GetBlogsFail {
  type: typeof GET_BLOGS_FAIL;
}

export interface GetSingleBlogLoading {
  type: typeof GET_SINGLE_BLOG_LOADING;
}

export interface GetSingleBlogSuccess {
  type: typeof GET_SINGLE_BLOG_SUCCESS;
  payload: Blog;
}

export interface GetSingleBlogFail {
  type: typeof GET_SINGLE_BLOG_FAIL;
}

export type BlogDispatchTypes =
  | GetBlogsLoading
  | GetBlogsSuccess
  | GetBlogsFail
  | GetSingleBlogLoading
  | GetSingleBlogSuccess
  | GetSingleBlogFail;
