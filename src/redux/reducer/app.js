import { createReducer } from 'reduxsauce';
import produce from 'immer';
import { AppTypes } from '../actions/app';

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
export default createReducer(INITIAL_STATE, {
  [AppTypes.SET_LOADING]: setLoading,
});
