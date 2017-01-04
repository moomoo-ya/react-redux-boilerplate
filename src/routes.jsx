import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';
import Application from './containers/Application';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="application" component={Application} />
    <Route path="about" component={About} />
    <Route path="*" component={NotFound} />
  </Route>
);
