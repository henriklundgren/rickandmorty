import '@testing-library/jest-dom';
import React from 'react';
import {render, screen} from '@testing-library/react';
import List from './list.js';

test('should not render if no collection', () => {
  const fixture = 'No results';
  render(<List />);
  const element = screen.getByText(/No results/i);

  expect(element).toBeInTheDocument();
});

test('should not render if empty collection', () => {
  const fixture = [];
  render(<List results={fixture} />);
  const element = screen.getByText(/No results/i);

  expect(element).toBeInTheDocument();
});

test('should render if collection', () => {
  const fixture = [{
    name: 'Foo',
    id: 1,
  }];
  const {container} = render(<List results={fixture} />);
  const element = container.firstChild;

  expect(element).toBeDefined();
});
