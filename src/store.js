import { createStore, compose, applyMiddleware } from 'redux';
import { createLogger } from "redux-logger";
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';
import rootReducer from './reducers/root_reducer';
import * as ref from './database';
import { isDev } from './constants';

const sagaMiddleware = createSagaMiddleware();

const loggerMiddleware = createLogger();

if (isDev) {
  console.info('Firebase database: ', ref);
}

const DEBUG = process.env.NODE_ENV !== 'prod' && process.env.NODE_ENV !== 'production';

const middleware = [
  thunk,
  sagaMiddleware,
  DEBUG && loggerMiddleware,
].filter(Boolean);


const store = createStore(
  rootReducer,
  // persistedState,
  compose(
    applyMiddleware( // can use thunks, sagas, etc.
      ...middleware
    ),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
  )
);

// store.subscribe(throttle(() => {
//   saveState({
//    randomState
//   });
// }), 1000);

sagaMiddleware.run(rootSaga);

export default store;
