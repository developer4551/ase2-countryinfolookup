import { render, screen } from '@testing-library/react';
import App from '../../App';
import { BrowserRouter } from 'react-router-dom';

test('renders Welcome to Country Information Lookup text', () => {
  render(<BrowserRouter>
    <App />
  </BrowserRouter> );
  const linkElement = screen.getByText(/Welcome to Country Information Lookup/i);
  expect(linkElement).toBeInTheDocument();
});
