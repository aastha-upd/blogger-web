import { gql } from '@apollo/client';

// Define GraphQL query
export const GET_BLOGS = gql`
  query blogs($pageSize: Int!, $pageNumber: Int!, $id: ID) {
    blogs(pageSize: $pageSize, pageNumber: $pageNumber, id: $id) {
      id
      title
      image
      excerpt
      author
      date
      slug
      content
      minRead
      tags
    }
  }
`;
