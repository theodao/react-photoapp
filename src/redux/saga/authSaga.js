import { takeLatest } from 'redux-saga/effects';
import AuthActions, { AuthTypes } from '../reducer/authReducer';

function* login({ payload }) {
  console.log(payload);
}

function* logout({ payload }) {
  console.log(payload);
}

export default [
  takeLatest(AuthTypes.LOGIN, login),
  takeLatest(AuthTypes.LOGOUT, logout),
];
