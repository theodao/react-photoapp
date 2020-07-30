import { createActions, createReducer } from 'reduxsauce';
import produce from 'immer';

const { Types, Creators } = createActions({
  setCategories: ['payload'],
  setItems: ['payload'],
  fetchCategories: ['payload'],
  fetchItems: ['payload'],
});

export const CategoryTypes = Types;
export default Creators;

/** Initial State */
const INITIAL_STATE = {
  categories: [],
  items: [],
};

/** Reducers */
const setCategories = (state, { payload: data }) =>
  produce(state, (draft) => {
    draft.categories = data;
  });

const setItems = (state, { payload: data }) =>
  produce(state, (draft) => {
    draft.items = data;
  });

/** Link reducer to Action Types */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_CATEGORIES]: setCategories,
  [Types.SET_ITEMS]: setItems,
});
