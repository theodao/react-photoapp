import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootReducer from '../reducer';

export default () => {
  /** Redux configuration  */
  const middleware = [];
  const enhancers = [];

  /** Saga middleware  */
  const sagaMiddleware = createSagaMiddleware();
  middleware.push(sagaMiddleware);

  /** Logger middleware  */
  middleware.push(logger);

  enhancers.push(applyMiddleware(...middleware));

  /** Store configuration  */
  const store = createStore(rootReducer, compose(...enhancers));

  /** Run root saga  */
  // const sagaManager = sagaMiddleware.run();

  return {
    store,
    // sagaManager,
  };
};
