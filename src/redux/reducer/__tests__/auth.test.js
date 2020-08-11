import { createStore } from 'redux';
import authReducer from '../auth';
import authActions from '../../actions/auth';
import _isEqual from 'lodash/isEqual';

describe('Testing auth reducer', () => {
  it('Should update store based on specific action', () => {
    const store = createStore(authReducer);
    store.dispatch(authActions.setIsLoggedIn(true));
    store.dispatch(authActions.setUserToken(1));
    store.dispatch(
      authActions.setUserInformation({
        name: 'Trung',
      }),
    );

    const { isLoggedIn, userToken, userInformation } = store.getState();

    expect(userToken).toEqual(1);
    expect(isLoggedIn).toEqual(true);
    expect(userInformation).toEqual({
      name: 'Trung',
    });
  });
});
