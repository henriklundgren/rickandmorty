import '@testing-library/jest-dom';
import React from 'react';
import {render, screen} from '@testing-library/react';
import Header from './header.js';

test('should render title', () => {
  const fixture = "Foo";
  render(<Header title={fixture} />);
  const element = screen.getByText(/Foo/i);

  expect(element).toBeInTheDocument();
});

test('should render component', () => {
  const fixture = <div>Bar</div>;
  render(<Header searchComponent={fixture} />);
  const element = screen.getByText('Bar');

  expect(element).toBeInTheDocument();
});
