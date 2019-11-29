// Imports: Dependencies
import { all, fork } from 'redux-saga/effects';

// Imports: Redux Sagas
import { watchUserData } from "./userSaga";

// Redux Saga: Root Saga
export function* rootSaga () {
  yield all([
    fork(watchUserData),
  ]);
};
