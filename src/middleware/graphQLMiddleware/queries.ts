import { gql } from "graphql-request";

export const getAllCategoriesGQL = gql`
  query findAllCategories {
    findAllCategories {
      id
      name
      contents {
        id
        title
      }
      createdAt
      updatedAt
    }
  }
`;

export const getAllBlogsGQL = gql`
  query findAllContents($categoryId: Int, $search: String, $slug: String) {
    findAllContents(categoryId: $categoryId, search: $search, slug: $slug) {
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

export const getBlogByIdGQL = gql`
  query findContentById($id: Int!) {
    findContentById(id: $id) {
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
