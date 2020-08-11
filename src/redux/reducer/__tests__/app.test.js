import { createStore } from 'redux';
import appReducer from '../app';
import appActions from '../../actions/app';
import _isEqual from 'lodash/isEqual';

describe('Testing app reducer', () => {
  it('Should update store based on specific action', () => {
    const store = createStore(appReducer);
    store.dispatch(appActions.setLoading(true));

    const { isLoading } = store.getState();

    expect(isLoading).toEqual(true);
  });
});
