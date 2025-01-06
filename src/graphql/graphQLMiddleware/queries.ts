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
  query findAllContents($category: String, $search: String, $status: String) {
    findAllContents(category: $category, search: $search, status: $status) {
      id
      title
      slug
      category {
        id
        name
      }
      author
      excerpt
      coverImageUrl
      body
      metaTitle
      metaDescription
      metaKeywords
      tags
      readingTime
      status
      isPublished
      publishedAt
      viewsCount
      version
      previousVersions
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
      slug
      category {
        id
        name
      }
      author
      excerpt
      coverImageUrl
      body
      metaTitle
      metaDescription
      metaKeywords
      tags
      readingTime
      status
      isPublished
      publishedAt
      viewsCount
      version
      previousVersions
      createdAt
      updatedAt
    }
  }
`;
