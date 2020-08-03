import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import rootReducer from '../reducer';
import rootSaga from '../saga';

export default () => {
  /** Redux configuration  */
  const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['category', 'app'],
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const middleware = [];
  const enhancers = [];

  /** Saga middleware  */
  const sagaMiddleware = createSagaMiddleware();
  middleware.push(sagaMiddleware);

  /** Logger middleware  */
  middleware.push(logger);

  enhancers.push(applyMiddleware(...middleware));

  /** Store configuration  */
  const store = createStore(persistedReducer, compose(...enhancers));
  const persistor = persistStore(store);
  /** Run root saga  */
  const sagaManager = sagaMiddleware.run(rootSaga);

  return {
    store,
    sagaManager,
    persistor,
  };
};
