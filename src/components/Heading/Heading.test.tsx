import { renderTheme } from '../../../styles/render-theme';
import { screen } from '@testing-library/react';
// import { theme } from '../../../styles/theme';
import { Heading } from '.';

describe('<Heading />', () => {
  it('should render with default values', () => {
    renderTheme(<Heading>text</Heading>);
    const heading = screen.getByRole('heading', { name: 'text' });

    // expect(heading).toHaveStyle({
    //   color: theme.colors.primary,
    //   'font-size': theme.font.sizes.xhuge,
    //   'text-transform': 'none',
    // });
    expect(heading).toBeInTheDocument();
  });
});
