import { gql } from 'graphql-request';
import { GRAPHQL_FRAGMENTS } from './fragments';

export const GRAPHQL_QUERY = gql`
  ${GRAPHQL_FRAGMENTS}

  query GET_POSTS(
    $categorySlug: String
    $postSlug: String
    $authorSlug: String
    $tagSlug: String
    $start: Int = 0
    $limit: Int = 10
    $sort: [String] = "createdAt:desc"
  ) {
    setting {
      ...settings
    }
    posts(
      sort: $sort
      pagination: { start: $start, limit: $limit }
      filters: {
        slug: { contains: $postSlug }
        author: { slug: { contains: $authorSlug } }
        tags: { slug: { contains: $tagSlug } }
        categories: { slug: { contains: $categorySlug } }
      }
    ) {
      ...post
    }
  }
`;
