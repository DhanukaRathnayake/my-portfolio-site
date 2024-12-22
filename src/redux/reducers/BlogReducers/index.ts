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

export type BlogState = {
  blogs: Blog[] | null;
  singleBlog: Blog | null;
  loading: boolean;
  error: string | null;
};

const initialState: BlogState = {
  blogs: null,
  singleBlog: null,
  loading: false,
  error: null,
};

const blogReducer = (
  state: BlogState = initialState,
  action: BlogDispatchTypes
): BlogState => {
  switch (action.type) {
    case GET_BLOGS_LOADING:
    case GET_SINGLE_BLOG_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case GET_BLOGS_SUCCESS:
      return {
        ...state,
        loading: false,
        blogs: action.payload,
        error: null,
      };

    case GET_SINGLE_BLOG_SUCCESS:
      return {
        ...state,
        loading: false,
        singleBlog: action.payload,
        error: null,
      };

    case GET_BLOGS_FAIL:
    case GET_SINGLE_BLOG_FAIL:
      return {
        ...state,
        loading: false,
        error: "Failed to fetch data.",
      };

    default:
      return state;
  }
};

export default blogReducer;
