import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders FitNice Library', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/fitnice library/i);
  expect(linkElement).toBeInTheDocument();
});
