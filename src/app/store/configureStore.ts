import { Store, applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from './reducers';

function configureStore(initialState?: any): Store {
  let middlewares: any = applyMiddleware();

  if (process.env.NODE_ENV !== 'production') {
    middlewares = composeWithDevTools(middlewares);
  }

  const store = createStore(rootReducer as any, initialState as any, middlewares) as Store;

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

export default configureStore;
