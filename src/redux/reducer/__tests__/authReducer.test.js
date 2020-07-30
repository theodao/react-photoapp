import { createStore } from 'redux';
import actions, { reducer } from '../authReducer';
import _isEqual from 'lodash/isEqual';

describe('Testing auth reducer', () => {
  it('Should update store based on specific action', () => {
    const store = createStore(reducer);
    store.dispatch(actions.setIsLoggedIn(true));
    store.dispatch(actions.setUserToken(1));

    const { isLoggedIn, userToken } = store.getState();

    expect(userToken).toEqual(1);
    expect(isLoggedIn).toEqual(true);
  });
});
