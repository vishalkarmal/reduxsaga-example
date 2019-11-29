import * as ActionTypes from "./ActionType";

export const registerUser = () => ({
  type: ActionTypes.REGISTER_USER,
});

export const registerUseraSuccess = () => ({
  type: ActionTypes.REGISTER_USER_SUCCESS,
});

export const registerUserError = () => ({
  type: ActionTypes.REGISTER_USER_ERROR,
});
