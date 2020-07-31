import { takeLatest, put } from 'redux-saga/effects';
import AuthActions, { AuthTypes } from '../reducer/authReducer';
import { signup as _signup, login as _login } from '../../services/api';
import { mappingErrorResponse } from '../../utils/helper';

function* login({ payload }) {
  const { username, password, history, onFailure } = payload;
  try {
    const response = yield _login({
      username,
      password,
    });

    if (response.status === 200) {
      yield put(AuthActions.setIsLoggedIn(true));
      history.push('/dashboard');
    }
  } catch (error) {
    const { message } = error;

    if (typeof message === 'object') {
      const errorList = mappingErrorResponse(message);
      onFailure(errorList);
    }

    onFailure(message);
  }
}

// function* logout({ payload }) {
//   console.log(payload);
// }

function* signup({ payload }) {
  const { email, username, password, onSuccess, onFailure, history } = payload;

  try {
    const response = yield _signup({
      email,
      username,
      password,
      name: payload.username,
    });
    if (response) {
      onSuccess();
      history.push('/login');
    }
  } catch (error) {
    const { message } = error;
    const errorList = mappingErrorResponse(message);
    onFailure(errorList);
  }
}

export default [
  takeLatest(AuthTypes.LOGIN, login),
  // takeLatest(AuthTypes.LOGOUT, logout),
  takeLatest(AuthTypes.SIGNUP, signup),
];
