import { createActions } from 'reduxsauce';

// Action constant and action creator
const { Types, Creators } = createActions({
  setLoading: ['payload'],
});

export const AppTypes = Types;
export default Creators;
