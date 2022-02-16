import { render, screen } from '@testing-library/react';
import PokemonSearch from './PokemonSearch';

test('renders learn react link', () => {
  render(<PokemonSearch />);
  const linkElement = screen.getByText(/Search Pokemon/i);
  expect(linkElement).toBeInTheDocument();
});
