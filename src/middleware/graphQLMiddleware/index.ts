import { request, ClientError } from "graphql-request";

export const graphqlBaseQuery =
  ({ baseUrl }: { baseUrl: string }) =>
  async ({ body, variables }: { body: any; variables?: any }) => {
    try {
      const result: any = await request(baseUrl, body, variables);

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
