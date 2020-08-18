import React from 'react';
import { render } from '@testing-library/react';
import App from '../components/App';

test('renders h2 tag and text', () => {
  const { getByText } = render(<App />);
  const h2ref = getByText(/Surreal Estate/i);
  expect(h2ref).toBeInTheDocument();
});
