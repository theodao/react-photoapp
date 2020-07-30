import { combineReducers } from 'redux';

export default combineReducers({
  auth: require('./authReducer').reducer,
  app: require('./appReducer').reducer,
  category: require('./categoryReducer').reducer,
});
