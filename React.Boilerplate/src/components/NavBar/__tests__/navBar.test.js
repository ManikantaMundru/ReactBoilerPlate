import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import NavBar from '../index';

afterEach(cleanup);

test('does component render', () => {
  const { asFragment } = render(
    <NavBar
      auth={{
        isAuthenticated: false,
        loginWithRedirect: () => {
          alert('login'); //eslint-disable-line
        },
        logout: () => {
          alert('logout'); //eslint-disable-line
        },
        user: {
          nickname: 'tester',
          picture:
            'https://images.squarespace-cdn.com/content/5c4f53218f5130618631fc97/1550519005127-SXL0XBRPDP4NJ762XBRV/RapidDeploy+logo+2019+TM-01.png?format=1500w&content-type=image%2Fpng',
        },
      }}
    />,
  );
  expect(asFragment()).toMatchSnapshot();
});

test('does component render', () => {
  const { asFragment } = render(
    <NavBar
      auth={{
        isAuthenticated: true,
        loginWithRedirect: () => {
          alert('login'); //eslint-disable-line
        },
        logout: () => {
          alert('logout'); //eslint-disable-line
        },
        user: {
          nickname: 'tester',
          picture:
            'https://images.squarespace-cdn.com/content/5c4f53218f5130618631fc97/1550519005127-SXL0XBRPDP4NJ762XBRV/RapidDeploy+logo+2019+TM-01.png?format=1500w&content-type=image%2Fpng',
        },
      }}
    />,
  );
  expect(asFragment()).toMatchSnapshot();
});
