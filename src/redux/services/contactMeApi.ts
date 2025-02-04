// src/redux/services/contactMeApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface EmailData {
  email: string;
  name: string;
  message: string;
}

export const contactMeApi = createApi({
  reducerPath: "contactMeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }), // Use the Next.js API route
  endpoints: (builder) => ({
    sendEmail: builder.mutation({
      query: (emailData: EmailData) => ({
        url: "/contact-via-email",
        method: "POST",
        body: emailData,
      }),
    }),
  }),
});

export const { useSendEmailMutation } = contactMeApi;
