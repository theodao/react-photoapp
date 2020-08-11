import { combineReducers } from 'redux';
import authReducer from './auth';
import appReducer from './app';
import categoryReducer from './category';

export default combineReducers({
  auth: authReducer,
  app: appReducer,
  category: categoryReducer,
});
