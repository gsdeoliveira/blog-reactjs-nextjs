import { PostsTemplateProps } from '.';
import { data } from '../../api/dados.json';

const posts = data.posts.data.map((post) => {
  return {
    id: post.id,
    title: post.attributes.title,
    excerpt: post.attributes.excerpt,
    cover: post.attributes.cover,
    content: post.attributes.content,
    tags: post.attributes.tags.data,
    slug: post.attributes.slug,
    createdAt: post.attributes.createdAt,
  };
});
export default {
  settings: data.setting,
  posts: posts,
} as PostsTemplateProps;
