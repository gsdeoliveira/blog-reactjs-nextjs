import { useEffect } from 'react';
import { loadPosts } from '../src/api/load-posts';

export default function Index() {
  useEffect(() => {
    loadPosts({
      authorSlug: 'gabriel-sousa',
    }).then((r) => {
      console.log(r);
    });
  }, []);

  return <h1>OI</h1>;
}
