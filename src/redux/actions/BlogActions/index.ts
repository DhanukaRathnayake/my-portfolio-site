import { Dispatch } from "redux";
import {
  Blog,
  BlogDispatchTypes,
  GET_BLOGS_LOADING,
  GET_BLOGS_SUCCESS,
  GET_BLOGS_FAIL,
  GET_SINGLE_BLOG_LOADING,
  GET_SINGLE_BLOG_SUCCESS,
  GET_SINGLE_BLOG_FAIL,
} from "../../types/BlogActionTypes";
import { GraphQLClient, gql } from "graphql-request";

const endpoint = process.env.BACKEND_URL;

if (!endpoint) {
  throw new Error("GraphQL endpoint is not defined in environment variables.");
}

const client = new GraphQLClient(endpoint);

// Action to fetch all blogs
export const GetBlogs =
  (categoryId?: number, search?: string, slug?: string) =>
  async (dispatch: Dispatch<BlogDispatchTypes>) => {
    const GET_BLOGS_QUERY = gql`
      query FindAllBlogs($categoryId: Int, $search: String, $slug: String) {
        findAllBlogs(categoryId: $categoryId, search: $search, slug: $slug) {
          id
          title
          body
          category {
            id
            name
          }
          metaDescription
          metaKeywords
          metaTitle
          slug
          status
          isPublished
          publishedAt
          createdAt
          updatedAt
        }
      }
    `;

    type FindAllBlogsResponse = {
      findAllBlogs: Blog[];
    };

    try {
      dispatch({ type: GET_BLOGS_LOADING });

      const variables = { categoryId, search, slug };
      const response = await client.request<FindAllBlogsResponse>(
        GET_BLOGS_QUERY,
        variables
      );

      dispatch({
        type: GET_BLOGS_SUCCESS,
        payload: response.findAllBlogs,
      });
    } catch (e) {
      dispatch({ type: GET_BLOGS_FAIL });
    }
  };

// Action to fetch a single blog
export const GetSingleBlog =
  (id: string) => async (dispatch: Dispatch<BlogDispatchTypes>) => {
    const GET_SINGLE_BLOG_QUERY = gql`
      query FindBlogById($id: Int!) {
        findBlogById(id: $id) {
          id
          title
          body
          category {
            id
            name
          }
          metaDescription
          metaKeywords
          metaTitle
          slug
          status
          isPublished
          publishedAt
          createdAt
          updatedAt
        }
      }
    `;

    type FindBlogByIdResponse = {
      findBlogById: Blog;
    };

    try {
      dispatch({ type: GET_SINGLE_BLOG_LOADING });

      const variables = { id };
      const response = await client.request<FindBlogByIdResponse>(
        GET_SINGLE_BLOG_QUERY,
        variables
      );

      dispatch({
        type: GET_SINGLE_BLOG_SUCCESS,
        payload: response.findBlogById,
      });
    } catch (e) {
      dispatch({ type: GET_SINGLE_BLOG_FAIL });
    }
  };
