import { PostProps } from '.';
import { mappedData as data } from '../../api/map-data';

const { title, excerpt, cover, content, author, categories, createdAt } =
  data.posts[0];

export default {
  title,
  excerpt,
  cover,
  content,
  author,
  categories,
  createdAt,
} as PostProps;
