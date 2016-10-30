import React from 'react';

import ApplicationContainer from './application_container.es6.jsx'

import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import store, {history} from '../../store.es6.jsx'
import IndexPage from '../pages/index_page.es6.jsx'

class Application extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={ApplicationContainer}>
            <IndexRoute component={IndexPage} />
          </Route>
        </Router>
      </Provider>
    );
  }
}

export default Application;
