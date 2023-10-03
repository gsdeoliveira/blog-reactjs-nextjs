import { ArticleHeaderProps } from '.';
import { data as jsonData } from '../../api/dados.json';

const {
  title,
  excerpt,
  cover,
  author,
  categorias: { categories },
  createdAt,
} = jsonData.posts.data[0].attributes;

export default {
  title,
  excerpt,
  cover,
  author,
  categories,
  createdAt,
} as ArticleHeaderProps;
