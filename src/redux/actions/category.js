import { createActions } from 'reduxsauce';

// Action constant and action creator
const { Types, Creators } = createActions({
  setCategories: ['payload'],
  setTotalCategory: ['payload'],
  setItems: ['payload'],
  setTotalItem: ['payload'],
  setIsFetching: ['payload'],
  setIsFetchingItem: ['payload'],
  setCurrentItem: ['payload'],
  fetchCategories: ['payload'],
  setItemDetail: ['payload'],
  fetchItems: ['payload'],
  fetchItemDetail: ['payload'],
  addItem: ['payload'],
  addCategory: ['payload'],
  deleteItem: ['payload'],
  updateItem: ['payload'],
});

export const CategoryTypes = Types;
export default Creators;
