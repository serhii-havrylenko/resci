// @flow

import { createBrowserHistory } from 'history';
import { Provider } from 'mobx-react';
import { Router } from 'react-router';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import React from 'react';

import Routes from './components/Routes';

const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();

const stores = {
  routing: routingStore,
};

const history = syncHistoryWithStore(browserHistory, routingStore);

const App = () => (
  <Provider {...stores}>
    <Router history={history}>
      <Routes />
    </Router>
  </Provider>
);

export default App;
