import { createActions, createReducer } from 'reduxsauce';
import produce from 'immer';

const { Types, Creators } = createActions({
  setLoading: ['payload'],
});

export const AppTypes = Types;
export default Creators;

/** Initial State  */
const INITIAL_STATE = {
  isLoading: false,
};

/** Reducer */
const setLoading = (state, { payload: isLoading }) =>
  produce(state, (draft) => {
    draft.isLoading = isLoading;
  });

/** Link reducer to action types  */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_LOADING]: setLoading,
});
