import React from 'react';
import { Route, IndexRoute } from 'react-router';

export default (
  <Route path='/' component={App}>
    {/* <IndexRoute component={Home} /> */}
    <Route path='best_option' component={Locator} />
  </Route>
);