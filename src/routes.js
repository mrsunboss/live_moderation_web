import React from 'react';
import { Route, IndexRoute } from 'react-router';

import {
  App,
  NotFoundPage
} from './components';
import {
  IndexPage,
  LivePage
} from './containers';

export default (store) => {


  return (
    <Route path="/" name="首頁" component={App}>
      <IndexRoute name="首頁" component={IndexPage} />
      <Route path="live/:id" component={LivePage}/>
      <Route path="*" component={NotFoundPage}/>

    </Route>
  );
};
