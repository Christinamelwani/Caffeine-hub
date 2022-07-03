import {
  IS_LOGGED_IN_SET_TRUE,
  IS_LOGGED_IN_SET_FALSE,
} from "../actions/actionTypes";

const initialState = { isLoggedIn: false };

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOGGED_IN_SET_TRUE:
      return { ...state, isLoggedIn: true };
    case IS_LOGGED_IN_SET_FALSE:
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
};

export default userReducer;
