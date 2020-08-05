import { takeLatest, put } from 'redux-saga/effects';
import _get from 'lodash/get';
import AuthActions, { AuthTypes } from '../reducer/authReducer';
import { signup as _signup, login as _login } from '../../services/api';
import { mappingErrorResponse } from '../../utils/helper';

export function* login({ payload }) {
  const { email, password, history, onFailure } = payload;
  try {
    const response = yield _login({
      email,
      password,
    });

    if (response.status === 200) {
      yield put(AuthActions.setIsLoggedIn(true));
      const token = _get(response, 'data.access_token', null);
      if (token !== null) {
        localStorage.setItem('token', token);
      }
      history.push('/dashboard');
    }
  } catch (error) {
    const message = _get(error, 'data.message');

    if (typeof message === 'object') {
      const errorList = mappingErrorResponse(message);
      onFailure(errorList);
    }

    onFailure(message);
  }
}

export function* logout() {
  try {
    yield put(AuthActions.setIsLoggedIn(false));
    localStorage.removeItem('token');
  } catch (error) {
    console.log(error);
  }
}

export function* signup({ payload }) {
  const { email, password, onSuccess, onFailure, history } = payload;

  try {
    const response = yield _signup({
      email,
      password,
      name: payload.username,
    });
    if (response) {
      onSuccess();
      history.push('/login');
    }
  } catch (error) {
    const message = _get(error, 'data.message');

    const errorList = mappingErrorResponse(message);
    onFailure(errorList);
  }
}

export default [
  takeLatest(AuthTypes.LOGIN, login),
  takeLatest(AuthTypes.LOGOUT, logout),
  takeLatest(AuthTypes.SIGNUP, signup),
];
