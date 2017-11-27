import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'remote-redux-devtools';
import { createLogger } from 'redux-logger';
import reducers from './reducers';

const log = createLogger({ diff: true, collapsed: true });

export default (initialState = {}) => {
  const middleware = [thunk, log];
  const enhancers = [];

  const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(
      applyMiddleware(...middleware),
      ...enhancers,
    ),
  );
  return store;
};
