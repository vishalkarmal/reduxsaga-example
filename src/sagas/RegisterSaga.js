// Imports: Dependencies
import { takeLatest, put } from "redux-saga/effects";
import Constant from "../constants/Constant";
import * as ActionType from "../actions/ActionType";
// API call Counter Async
function* fetchUser() {
  try {
    const response = yield fetch(Constant.API_URL+"", {
      method: "GET"
    });
    const jsonResponse = yield response.status === 200 ? response.json() : [];
    const userList = jsonResponse.data;
    yield put({ type: ActionType.GET_USER_DATA_SUCCESS, userList: userList });
  } catch (error) {
    yield put({ type: ActionType.GET_USER_DATA_ERROR, error });
  }
}

// Generator: Watch Increase Counter
export function* watchUserData() {
  // Take Last Action
  yield takeLatest(ActionType.GET_USER_DATA, fetchUser);
}
