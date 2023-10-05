import { data } from '../../api/dados.json';

export default {
  posts: data.posts.data.map((post) => ({
    id: post.id,
    title: post.attributes.title,
    cover: post.attributes.cover,
    excerpt: post.attributes.excerpt,
    slug: post.attributes.slug,
  })),
};
