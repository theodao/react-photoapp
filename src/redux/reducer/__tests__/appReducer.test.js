// import { createStore } from 'redux';
// import actions, { reducer } from '../appReducer';
// import _isEqual from 'lodash/isEqual';

// describe('Testing app reducer', () => {
//   it('Should update store based on specific action', () => {
//     const store = createStore(reducer);
//     store.dispatch(actions.setIsFetching(true));

//     const { isFetching, items, categories } = store.getState();

//     expect(isFetching).toEqual(true);
//     expect(_isEqual(items, [1])).toEqual(true);
//     expect(_isEqual(categories, [2])).toEqual(true);
//   });
// });
