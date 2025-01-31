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
        if (!response.findAllCategories) {
          throw new Error("No categories found");
        }
        return response.findAllCategories;
      },
      transformErrorResponse: (response: any) => {
        // Handle specific error responses here
        return {
          status: response.status,
          message: "Failed to fetch categories",
        };
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
        if (!response.findAllContents) {
          throw new Error("No blogs found");
        }
        return response.findAllContents;
      },
      transformErrorResponse: (response: any) => {
        // Handle specific error responses here
        return {
          status: response.status,
          message: "Failed to fetch blogs",
        };
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
        if (!response.findContentById) {
          throw new Error("Blog not found");
        }
        return response.findContentById;
      },
      transformErrorResponse: (response: any) => {
        // Handle specific error responses here
        return {
          status: response.status,
          message: "Failed to fetch blog by ID",
        };
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
