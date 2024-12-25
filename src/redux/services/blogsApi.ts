// Libraries
import { createApi } from "@reduxjs/toolkit/query/react";

// Middleware
import { graphqlBaseQuery } from "@/middleware/graphQLMiddleware";

// Types
import { TypeBlog } from "@/types/blog";

// Query
import {
  getAllCategoriesGQL,
  getAllBlogsGQL,
  getBlogByIdGQL,
} from "@/middleware/graphQLMiddleware/queries";

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
      transformResponse: (response: any) => response.findAllCategories,
    }),
    getAllBlogs: builder.query({
      query: ({ categoryId, search, slug }) => ({
        body: getAllBlogsGQL,
        variables: {
          categoryId,
          search,
          slug,
        },
      }),
      transformResponse: async (response: any) => response.findAllContents,
    }),
    getBlogById: builder.query({
      query: ({ id }) => ({
        body: getBlogByIdGQL,
        variables: {
          id: id,
        },
      }),
      transformResponse: async (response: any) => response.findContentById,
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
