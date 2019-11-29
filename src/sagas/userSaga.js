// Imports: Dependencies
import { takeLatest, put } from "redux-saga/effects";
import * as ActionType from "../actions/ActionType";
import Constant from "../constants/Constant";
// API call Counter Async
function* fetchUser() {
  try {
    const response = yield fetch(Constant.API_URL + "api/users/", {
      method: "GET"
    });
    const jsonResponse = yield response.status === 200 ? response.json() : [];
    //const userList = jsonResponse.data;
    yield put({ type: ActionType.GET_USER_DATA_SUCCESS, userList: jsonResponse });
  } catch (error) {
    yield put({ type: ActionType.GET_USER_DATA_ERROR, error });
  }
}

// Generator: Watch Increase Counter
export function* watchUserData() {
  // Take Last Action
  yield takeLatest(ActionType.GET_USER_DATA, fetchUser);
}
