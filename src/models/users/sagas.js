import { takeLatest, all, put, call } from 'redux-saga/effects';

import * as api from 'api';

import { actions } from './slice';

export function* fetchUsersSaga() {
  try {
    const response = yield call(api.fetchUsers);
    yield put({
      type: actions.fetchUsersSuccess,
      payload: response.data,
    });
  } catch (err) {
    console.error(err);
  }
}

export function* updateUserSaga({ payload }) {
  try {
    yield put({
      type: actions.updateUserSuccess,
      payload,
    });
  } catch (err) {
    console.error(err);
  }
}

export function* deleteUserSaga({ payload }) {
  try {
    yield put({
      type: actions.deleteUserSuccess,
      payload,
    });
  } catch (err) {
    console.error(err);
  }
}

export default function*() {
  yield all([takeLatest(actions.fetchUsers, fetchUsersSaga)]);
  yield all([takeLatest(actions.updateUser, updateUserSaga)]);
  yield all([takeLatest(actions.deleteUser, deleteUserSaga)]);
}
