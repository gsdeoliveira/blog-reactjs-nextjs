import { PostProps } from '.';
import { data } from '../../api/dados.json';

const {
  title,
  excerpt,
  cover,
  content,
  author,
  categorias: { categories },
  createdAt,
} = data.posts.data[0].attributes;

export default {
  title,
  excerpt,
  cover,
  content,
  author,
  categories,
  createdAt,
} as PostProps;
