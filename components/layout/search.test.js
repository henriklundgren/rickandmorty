import '@testing-library/jest-dom';
import React from 'react';
import {render, screen} from '@testing-library/react';
import Search from './search.js';

test('should render form element', () => {
  render(<Search />);
  const element = screen.getByRole('search');
 
  expect(element).toBeInTheDocument();
});

test('should render input with value', () => {
  const fixture = "Foo";
  render(<Search value={fixture} />);
  const element = screen.getByRole('search');

  expect(element).toHaveFormValues({
    search: fixture,
  });
});
