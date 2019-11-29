import * as ActionType from "../actions/ActionType";

// Initial State
const initialState = {
  userList: []
};

// Redux: User Reducer
const userReducer = (state = initialState, action) => {
  console.log("userReducer : " + JSON.stringify(action));
  switch (action.type) {
    case ActionType.GET_USER_DATA: {
      return {
        ...state,
        isFetching: true,
        userList: []
      };
    }
    case ActionType.GET_USER_DATA_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        userList: action.userList
      };
    }
    case ActionType.GET_USER_DATA_ERROR: {
      return {
        ...state,
        isFetching: false,
        userList: [],
        error: action.error
      };
    }
    default: {
      return state;
    }
  }
};

// Exports
export default userReducer;
