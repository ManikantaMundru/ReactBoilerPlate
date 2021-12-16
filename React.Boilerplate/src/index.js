import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';

import { Auth0Provider } from './auth/auth0-wrapper';
import config from './auth/auth_config.json';

// Import CSS reset and Global Styles
import GlobalStyles from './global-styles';

const createHistory = require('history').createBrowserHistory;
const history = createHistory();
const MOUNT_NODE = document.getElementById('root');

// after login
const onRedirectCallback = appState => {
  window.history.replaceState(
    {},
    document.title,
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname,
  );
};

ReactDOM.render(
  <Auth0Provider
    domain={config.domain}
    client_id={config.clientId}
    redirect_uri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
  >
    <Router history={history}>
      <GlobalStyles />
      <App />
    </Router>
  </Auth0Provider>,
  MOUNT_NODE,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
