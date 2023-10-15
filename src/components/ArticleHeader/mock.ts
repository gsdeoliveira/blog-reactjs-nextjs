import { ArticleHeaderProps } from '.';
import { mappedData as data } from '../../api/map-data';

const { title, excerpt, cover, author, categories, createdAt } = data.posts[0];

export default {
  title,
  excerpt,
  cover,
  author,
  categories,
  createdAt,
} as ArticleHeaderProps;
