import { createReducer } from 'reduxsauce';
import produce from 'immer';
import { AuthTypes } from '../actions/auth';

/** Initial State  */
const INITIAL_STATE = {
  isLoggedIn: false,
  userToken: null,
  userInformation: {},
};

/** Reducers  */
const setIsLoggedIn = (state, { payload: isLoggedIn }) =>
  produce(state, (draft) => {
    draft.isLoggedIn = isLoggedIn;
  });

const setUserToken = (state, { payload: userToken }) =>
  produce(state, (draft) => {
    draft.userToken = userToken;
  });

const setUserInformation = (state, { payload: userInformation }) =>
  produce(state, (draft) => {
    draft.userInformation = userInformation;
  });

/** Link Reducer to Action types  */
export default createReducer(INITIAL_STATE, {
  [AuthTypes.SET_IS_LOGGED_IN]: setIsLoggedIn,
  [AuthTypes.SET_USER_TOKEN]: setUserToken,
  [AuthTypes.SET_USER_INFORMATION]: setUserInformation,
});
