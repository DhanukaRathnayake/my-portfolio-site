// Libraries
import { createApi } from "@reduxjs/toolkit/query/react";

// Middleware
import { graphqlBaseQuery } from "@/graphql";

// Types
import { TypeService } from "@/types/service";

// Query
import {
  getAllServicesGQL,
  getServiceBySlugGQL,
} from "@/graphql/graphQLMiddleware/queries";

const BACKEND_URL = process.env.BACKEND_URL;

export const servicesApi = createApi({
  reducerPath: "servicesApi",
  refetchOnFocus: true,
  baseQuery: graphqlBaseQuery({
    baseUrl: `${BACKEND_URL}/graphql`,
  }),
  endpoints: (builder) => ({
    getAllServices: builder.query({
      query: ({ search, status }) => ({
        body: getAllServicesGQL,
        variables: {
          search: search,
          status: "published",
        },
      }),
      transformResponse: async (response: any) => {
        if (!response.findAllServices) {
          throw new Error("No services found");
        }
        return response.findAllServices;
      },
      transformErrorResponse: (response: any) => {
        // Handle specific error responses here
        return {
          status: response.status,
          message: "Failed to fetch services",
        };
      },
    }),
    getServiceBySlug: builder.query({
      query: ({ slug }) => ({
        body: getServiceBySlugGQL,
        variables: {
          slug: slug,
        },
      }),
      transformResponse: async (response: any) => {
        if (!response.findServiceBySlug) {
          throw new Error("Service not found");
        }
        return response.findServiceBySlug;
      },
      transformErrorResponse: (response: any) => {
        // Handle specific error responses here
        return {
          status: response.status,
          message: "Failed to fetch service by Slug",
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components
export const {
  useGetAllServicesQuery,
  useGetServiceBySlugQuery,
  util: { getRunningQueriesThunk },
} = servicesApi;

// export endpoints for use in SSR
export const { getAllServices, getServiceBySlug } = servicesApi.endpoints;
