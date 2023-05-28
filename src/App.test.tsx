import { render, screen } from '@testing-library/react';
import App from './App';

test('renders steam link', () => {
  render(<App />);
  const linkElement = screen.getByText(/yandex.praсtiсum/i);
  expect(linkElement).toBeDefined();
});
