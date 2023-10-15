import { request } from 'graphql-request';
import config from '../config';
import { GRAPHQL_QUERY } from '../graphql/queries';
import { PostStrapi } from '../shared-types/post-strapi';
import { SettingsStrapi } from '../shared-types/settings-strapi';
import { mapData } from './map-data';

export type LoadPostsVariables = {
  categorySlug?: string;
  postSlug?: string;
  postSearch?: string;
  authorSlug?: string;
  tagSlug?: string;
  sort?: string;
  start?: number;
  limit?: number;
};

export type StrapiPostAndSettings = {
  setting: SettingsStrapi;
  posts: PostStrapi[];
};

function NotIsEmpty(obj) {
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) return true;
  }
  return false;
}

export const loadPosts = async (
  variables: LoadPostsVariables = {},
): Promise<StrapiPostAndSettings> => {
  if (NotIsEmpty(variables)) {
    console.log(variables);
  }

  const defaultVariables: LoadPostsVariables = {
    sort: 'createdAt:desc',
    start: 0,
    limit: 10,
    categorySlug: '',
    authorSlug: '',
    tagSlug: '',
    postSlug: '',
    postSearch: '',
  };

  const data: StrapiPostAndSettings = mapData(
    await request(config.graphqlURL, GRAPHQL_QUERY, {
      ...defaultVariables,
      ...variables,
    }),
  );

  return data;
};
