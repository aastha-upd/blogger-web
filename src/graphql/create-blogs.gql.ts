import { gql } from '@apollo/client';

export const CREATE_BLOG_MUTATION = gql`
  mutation CreateBlog(
    $title: String!,
    $image: String!,
    $excerpt: String!,
    $author: String!,
    $content: String!,
    $tags: String
  ) {
    createBlog(
      title: $title,
      image: $image,
      excerpt: $excerpt,
      author: $author,
      content: $content,
      tags: $tags
    )
  }
`;
