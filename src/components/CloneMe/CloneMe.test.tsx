import { screen } from '@testing-library/react';
import { renderTheme } from '../../../styles/render-theme';
import { CloneMe } from './CloneMe';

describe('<CloneMe />', () => {
  it('should render', () => {
    renderTheme(<CloneMe />);
    expect(
      screen.getByRole('heading', { name: 'change-me' }),
    ).toBeInTheDocument();
  });
});
