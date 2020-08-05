import { createStore } from 'redux';
import actions, { reducer } from '../categoryReducer';
import _isEqual from 'lodash/isEqual';

describe('Testing category reducer', () => {
  it('Should update store based on specific action', () => {
    const store = createStore(reducer);
    store.dispatch(actions.setIsFetching(true));
    store.dispatch(actions.setIsFetchingItem(true));
    store.dispatch(
      actions.setItems([
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
    store.dispatch(actions.setCategories([2]));
    store.dispatch(actions.setTotalCategory(3));
    store.dispatch(actions.setTotalItem(2));
    store.dispatch(actions.setCurrentItem({ name: 'Trung' }));
    store.dispatch(
      actions.setItemDetail({
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
