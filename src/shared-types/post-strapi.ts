import { Author } from './author';
import { Category } from './category';
import { StrapiImage } from './strapi-image';
import { PostTag } from './tag';

export type PostStrapi = {
  id: string;
  attributes: {
    allowComments: boolean;
    author: Author;
    categorias: {
      categories: Category[];
    };
    content: string;
    cover: StrapiImage;
    createdAt: string;
    excerpt: string;
    slug: string;
    tags: PostTag[];
    title: string;
  };
};
