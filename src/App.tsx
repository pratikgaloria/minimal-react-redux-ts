import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'app/store/configureStore';
import User from 'app/containers/User/User';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <User />
  </Provider>,
  document.getElementById('root')
);
