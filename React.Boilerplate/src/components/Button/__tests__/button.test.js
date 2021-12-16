import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Button from '../index';

afterEach(cleanup);

test('does component render', () => {
  const { asFragment } = render(
    <Button title="test" onClick={() => alert('clicked')} />, // eslint-disable-line
  );
  expect(asFragment()).toMatchSnapshot();
});
