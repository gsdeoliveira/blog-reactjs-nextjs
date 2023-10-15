import { PostStrapi } from '../shared-types/post-strapi';
import { data } from './dados.json';
import { StrapiPostAndSettings } from './load-posts';

type oldImage = {
  data: {
    id: string;
    attributes: {
      alternativeText: string;
      url: string;
    };
  };
};

type oldTags = {
  id: string;
  attributes: {
    displayName: string;
    slug: string;
  };
};

type oldCategory = {
  id: string;
  attributes: {
    displayName: string;
    slug: string;
  };
};

type oldPostProps = {
  id: string;
  attributes: {
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    allowComments: false;
    createdAt: string;
    cover: oldImage;
    tags: {
      data: oldTags[];
    };
    author: {
      data: {
        id: string;
        attributes: {
          displayName: string;
          slug: string;
        };
      };
    };
    categorias: {
      categories: oldCategory[];
    };
  };
};

function mapPosts(data: oldPostProps[]): PostStrapi[] {
  console.log('data', data);
  return data.map((item) => {
    return {
      createdAt: item.attributes.createdAt,
      id: item.id,
      slug: item.attributes.slug,
      title: item.attributes.title,
      excerpt: item.attributes.excerpt,
      content: item.attributes.content,
      allowComments: item.attributes.allowComments,
      cover: {
        id: item.attributes.cover.data.id,
        alternativeText: item.attributes.cover.data.attributes.alternativeText,
        url: item.attributes.cover.data.attributes.url,
      },
      categories: item.attributes.categorias.categories.map((category) => {
        return {
          id: category.id,
          displayName: category.attributes.displayName,
          slug: category.attributes.slug,
        };
      }),
      tags: item.attributes.tags.data.map((tag) => {
        return {
          id: tag.id,
          displayName: tag.attributes.displayName,
          slug: tag.attributes.slug,
        };
      }),
      author: {
        id: item.attributes.author.data.id,
        displayName: item.attributes.author.data.attributes.displayName,
        slug: item.attributes.author.data.attributes.slug,
      },
    };
  });
}

export function mapData(data): StrapiPostAndSettings {
  return {
    setting: {
      id: data.setting.data.id,
      blogName: data.setting.data.attributes.blogName,
      blogDescription: data.setting.data.attributes.blogDescription,
      logo: {
        id: data.setting.data.attributes.logo.data.id,
        alternativeText:
          data.setting.data.attributes.logo.data.attributes.alternativeText,
        url: data.setting.data.attributes.logo.data.attributes.url,
      },
      menuLink: data.setting.data.attributes.menuLink,
      text: data.setting.data.attributes.text,
    },
    posts: mapPosts(data.posts.data),
  };
}

export const mappedData = mapData(data);
