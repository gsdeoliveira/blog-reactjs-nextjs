import Link from 'next/link';
import { Heading } from '../Heading';
import * as Styled from './styles';
import { StrapiImage } from '../../shared-types/strapi-image';

export type PostCardProps = {
  id: string;
  title: string;
  cover: StrapiImage;
  excerpt: string;
  slug: string;
};

export const PostCard = ({ title, cover, excerpt, slug }: PostCardProps) => {
  return (
    <Styled.Wrapper>
      <Link href={`/post/${slug}`} legacyBehavior>
        <a>
          <Styled.Cover src={cover.url} />
        </a>
      </Link>

      <Heading as="h2" size="small">
        <Link href={`/post/${slug}`} legacyBehavior>
          <a>{title}</a>
        </Link>
      </Heading>

      <Styled.Excerpt>{excerpt}</Styled.Excerpt>
    </Styled.Wrapper>
  );
};
