import { createActions } from 'reduxsauce';

// Action constant and action creator
const { Types, Creators } = createActions({
  setIsLoggedIn: ['payload'],
  setUserToken: ['payload'],
  setUserInformation: ['payload'],
  login: ['payload'],
  logout: ['payload'],
  signup: ['payload'],
});

export const AuthTypes = Types;
export default Creators;
