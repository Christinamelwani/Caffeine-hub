import { IS_LOGGED_IN_SET_TRUE } from "../actions/actionTypes";

const initialState = { isLoggedIn: false };

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOGGED_IN_SET_TRUE:
      return { ...state, isLoggedIn: true };
    default:
      return state;
  }
};

export default userReducer;
