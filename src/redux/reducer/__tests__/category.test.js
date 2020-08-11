import { createStore } from 'redux';
import categoryReducer from '../category';
import categoryActions from '../../actions/category';
import _isEqual from 'lodash/isEqual';

describe('Testing category reducer', () => {
  it('Should update store based on specific action', () => {
    const store = createStore(categoryReducer);
    store.dispatch(categoryActions.setIsFetching(true));
    store.dispatch(categoryActions.setIsFetchingItem(true));
    store.dispatch(
      categoryActions.setItems([
        {
          id: 1,
          name: 'Trung',
        },
        {
          id: 2,
          name: 'Ha',
        },
      ]),
    );
    store.dispatch(categoryActions.setCategories([2]));
    store.dispatch(categoryActions.setTotalCategory(3));
    store.dispatch(categoryActions.setTotalItem(2));
    store.dispatch(categoryActions.setCurrentItem({ name: 'Trung' }));
    store.dispatch(
      categoryActions.setItemDetail({
        id: 1,
        name: 'Alex',
      }),
    );

    const {
      isFetching,
      isFetchingItem,
      items,
      categories,
      totalCategories,
      totalItems,
      currentItem,
    } = store.getState();

    expect(isFetching).toEqual(true);
    expect(isFetchingItem).toEqual(true);
    expect(
      _isEqual(items, [
        {
          id: 1,
          name: 'Alex',
        },
        {
          id: 2,
          name: 'Ha',
        },
      ]),
    ).toEqual(true);
    expect(_isEqual(categories, [2])).toEqual(true);
    expect(_isEqual(currentItem, { name: 'Trung' })).toEqual(true);
    expect(totalCategories).toEqual(3);
    expect(totalItems).toEqual(2);
    expect(
      _isEqual(items, [
        {
          id: 1,
          name: 'Alex',
        },
        {
          id: 2,
          name: 'Ha',
        },
      ]),
    ).toEqual(true);
  });
});
