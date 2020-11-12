import '@testing-library/jest-dom';
import React from 'react';
import {render, screen} from '@testing-library/react';
import Layout from './layout.js';

test('should render', () => {
  const fixture = 'Foo';
  const {container} = render(<Layout initialSearchValue={fixture} />);
  const element = container.firstChild;

  expect(element).toBeInTheDocument();
});

test('should not render if undefined', () => {
  const fixture = undefined;
  const {container} = render(<Layout initialSearchValue={fixture} />);
  const element = container.firstChild;
  
  expect(element).toBe(null);
});
