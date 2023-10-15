import { gql } from 'graphql-request';

export const GRAPHQL_FRAGMENTS = gql`
  fragment image on UploadFileEntityResponse {
    data {
      id
      attributes {
        alternativeText
        url
      }
    }
  }

  fragment menuLink on ComponentMenuMenuLink {
    id
    link
    text
    newTab
  }

  fragment settings on SettingEntityResponse {
    data {
      id
      attributes {
        blogName
        blogDescription
        logo {
          ...image
        }
        menuLink {
          ...menuLink
        }
        text
      }
    }
  }

  fragment tags on TagRelationResponseCollection {
    data {
      id
      attributes {
        displayName
        slug
      }
    }
  }

  fragment author on AuthorEntityResponse {
    data {
      id
      attributes {
        displayName
        slug
      }
    }
  }

  fragment category on CategoryRelationResponseCollection {
    categories: data {
      id
      attributes {
        displayName
        slug
      }
    }
  }

  fragment post on PostEntityResponseCollection {
    data {
      id
      attributes {
        title
        slug
        excerpt
        content
        allowComments
        createdAt
        cover {
          ...image
        }
        tags {
          ...tags
        }
        author {
          ...author
        }
        categorias: categories {
          ...category
        }
      }
    }
  }
`;
