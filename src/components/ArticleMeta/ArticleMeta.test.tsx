import { screen } from '@testing-library/react';
import { renderTheme } from '../../../styles/render-theme';
import { ArticleMeta, ArticleMetaProps } from '.';

import mock from './mock';

const props: ArticleMetaProps = mock;

describe('<ArticleMeta />', () => {
  it('should render author and category links', () => {
    renderTheme(<ArticleMeta {...props} />);

    expect(screen.getByRole('link', { name: 'Gabriel Sousa' })).toHaveAttribute(
      'href',
      '/author/gabriel-sousa',
    );
    expect(screen.getByRole('link', { name: 'JavaScript' })).toHaveAttribute(
      'href',
      '/category/java-script',
    );
    expect(screen.getByRole('link', { name: 'React' })).toHaveAttribute(
      'href',
      '/category/react',
    );
  });

  it('should format date', () => {
    renderTheme(<ArticleMeta {...props} />);

    expect(screen.getByText('27 de set. de 2023')).toHaveAttribute(
      'datetime',
      props.createdAt,
    );
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<ArticleMeta {...props} />);
    expect(container).toMatchSnapshot();
  });
});
