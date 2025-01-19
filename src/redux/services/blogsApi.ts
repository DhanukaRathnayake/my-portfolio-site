// Libraries
import { createApi } from "@reduxjs/toolkit/query/react";

// Middleware
import { graphqlBaseQuery } from "@/graphql";

// Types
import { TypeBlog } from "@/types/blog";

// Query
import {
  getAllCategoriesGQL,
  getAllBlogsGQL,
  getBlogByIdGQL,
} from "@/graphql/graphQLMiddleware/queries";

const BACKEND_URL = process.env.BACKEND_URL;

export const blogsApi = createApi({
  reducerPath: "blogsApi",
  refetchOnFocus: true,
  baseQuery: graphqlBaseQuery({
    baseUrl: `${BACKEND_URL}/graphql`,
  }),
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: () => ({
        body: getAllCategoriesGQL,
      }),
      transformResponse: (response: any) => {
        return response.findAllCategories;
      },
    }),
    getAllBlogs: builder.query({
      query: ({ category, search, status }) => ({
        body: getAllBlogsGQL,
        variables: {
          category: category,
          search: search,
          status: "published",
        },
      }),
      transformResponse: async (response: any) => {
        return response.findAllContents;
      },
    }),
    getBlogById: builder.query({
      query: ({ id }) => ({
        body: getBlogByIdGQL,
        variables: {
          id: id,
        },
      }),
      transformResponse: async (response: any) => {
        return response.findContentById;
      },
    }),
  }),
});

// Export hooks for usage in functional components
export const {
  useGetAllCategoriesQuery,
  useGetAllBlogsQuery,
  useGetBlogByIdQuery,
  util: { getRunningQueriesThunk },
} = blogsApi;

// export endpoints for use in SSR
export const { getAllCategories, getAllBlogs, getBlogById } =
  blogsApi.endpoints;
