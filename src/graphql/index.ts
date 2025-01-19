import { GraphQLClient, ClientError } from "graphql-request";

export const graphqlBaseQuery =
  ({ baseUrl }: { baseUrl: string }) =>
  async ({ body, variables }: { body: any; variables?: any }) => {
    try {
      // Initialize GraphQLClient with base URL and headers, including x-api-key
      const client = new GraphQLClient(baseUrl, {
        headers: {
          "x-api-key": process.env.PUBLIC_API_KEY as string, // Static header
        },
      });

      // Perform the GraphQL request
      const result: any = await client.request(body, variables);

      // Optionally include variables in the result
      if (variables && variables.variation) {
        result.variable = variables;
      }

      return { data: result };
    } catch (error: any) {
      if (error instanceof ClientError) {
        return { error: { status: error.response.status, data: error } };
      }
      return { error: { status: 500, data: error } };
    }
  };
