import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Top 5 Malicious Domains/i);
  expect(linkElement).toBeInTheDocument();
});
