import {
  USER_SESSION,
  LOGIN_USER,
  LOGIN_USER_FAILURE,
  LOGIN_USER_INIT,
  LOGIN_USER_SUCCESS,
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILURE,
  FORGOT_PASSWORD_INIT,
  RESET_PASSWORD,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE,
  RESET_PASSWORD_INIT,
  CHANGE_PASSWORD,
  LOGOUT_USER,
  USER_SESSION_FAILURE,
} from '../actionTypes';
import { takeEvery, fork, put, all, call, takeLatest } from 'redux-saga/effects';

import { signin, getAppData, getUsers, signup, session } from '../../services';

import {
  loginUserSuccess,
  loginUserFailure,
  UserSessionSuccess,
  UserSessionFailure,
  changePasswordCtaSuccess,
  changePasswordCtaFailure,
  logoutUserSuccess,
  logoutUserFailure,
  forgotPasswordCtaSuccess,
  forgotPasswordCtaFailure,
  resetPasswordCtaSuccess,
  resetPasswordCtaFailure,
  UserSession as mkUserSession,
  logoutUserInit,
} from './actions';

import Axios from '../../apiClient/Axios';

function handleJWT(access_token) {
  localStorage.setItem('access_token', access_token);
  Axios.defaults.headers['Authorization'] = `Bearer ${access_token}`;
}

function handleLogout() {
  localStorage.clear();
  Axios.defaults.headers['Authorization'] = '';
}

function* userLogin(action) {
  try {
    // const response = yield call(signin, action.payload);
    // if (response.status === 200) {
    //   yield put(loginUserSuccess(response.data));
    //   const { access_token } = response.data;
    //   handleJWT(access_token);
    // } else {
    //   yield put(loginUserFailure(response.data.message));
    // }
    yield put(
      loginUserSuccess({
        _id: 1,
        username: 'admin',
      })
    );
  } catch (error) {
    yield put(loginUserFailure(error.message));
  }
}

function* userLogout(action) {
  try {
    yield put(logoutUserSuccess());
    handleLogout();
    yield put(logoutUserInit());
  } catch (error) {
    yield put(loginUserFailure(error.message));
  }
}

function* userSession(action) {
  try {
    const response = yield call(session, action.payload);
    if (response.status === 200) {
      yield put(UserSessionSuccess(response.data));
      const { access_token } = response.data;
      handleJWT(access_token);
    } else {
      yield put(UserSessionFailure(response.data.message));
    }
  } catch (error) {
    yield put(UserSessionFailure(error.message));
  }
}

export function* watchLoginUser() {
  yield takeEvery(LOGIN_USER, userLogin);
}

export function* watchUserSession() {
  yield takeEvery(USER_SESSION, userSession);
}

export function* watchUserLogout() {
  yield takeEvery(LOGOUT_USER, userLogout);
}

function* AuthSaga() {
  yield all([fork(watchLoginUser)]);
  yield all([fork(watchUserLogout)]);
  yield all([fork(watchUserSession)]);
}

export default AuthSaga;
