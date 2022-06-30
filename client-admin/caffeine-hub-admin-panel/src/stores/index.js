import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { IS_LOGGED_IN_SET_TRUE, DRINKS_FETCH } from "../actions/actionTypes";
import thunk from "redux-thunk";

const initialState = { isLoggedIn: false, drinks: [] };

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOGGED_IN_SET_TRUE:
      return { ...state, isLoggedIn: true };
    case DRINKS_FETCH:
      return { ...state, drinks: action.payload };
    default:
      return state;
  }
};

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
