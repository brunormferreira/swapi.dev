import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders core application', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/List/i);
  expect(linkElement).toBeInTheDocument();
});
