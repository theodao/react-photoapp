import { createActions, createReducer } from 'reduxsauce';
import produce from 'immer';

const { Types, Creators } = createActions({
  setIsLoggedIn: ['payload'],
  setUserToken: ['payload'],
  login: ['payload'],
  logout: ['payload'],
});

export const AuthTypes = Types;
export default Creators;

/** Initial State  */

const INITIAL_STATE = {
  isLoggedIn: false,
  userToken: null,
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

/** Link Reducer to Action types  */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_IS_LOGGED_IN]: setIsLoggedIn,
  [Types.SET_USER_TOKEN]: setUserToken,
});
