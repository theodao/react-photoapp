import { combineReducers } from 'redux';

export default combineReducers({
  auth: require('./authReducer').reducer,
});
