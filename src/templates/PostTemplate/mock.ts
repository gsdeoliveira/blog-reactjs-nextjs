import { PostTemplateProps } from '.';
import { data } from '../../api/dados.json';

const posts = {
  id: data.posts.data[0].id,
  author: data.posts.data[0].attributes.author,
  categories: data.posts.data[0].attributes.categorias.categories,
  title: data.posts.data[0].attributes.title,
  excerpt: data.posts.data[0].attributes.excerpt,
  cover: data.posts.data[0].attributes.cover,
  content: data.posts.data[0].attributes.content,
  tags: data.posts.data[0].attributes.tags.data,
  slug: data.posts.data[0].attributes.slug,
  createdAt: data.posts.data[0].attributes.createdAt,
};
export default {
  settings: data.setting,
  post: posts,
} as PostTemplateProps;
