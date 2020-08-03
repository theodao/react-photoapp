import { createStore } from 'redux';
import actions, { reducer } from '../appReducer';
import _isEqual from 'lodash/isEqual';

describe('Testing app reducer', () => {
  it('Should update store based on specific action', () => {
    const store = createStore(reducer);
    store.dispatch(actions.setLoading(true));

    const { isLoading } = store.getState();

    expect(isLoading).toEqual(true);
  });
});
