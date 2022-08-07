import { legacy_createStore as createStore } from "redux";
import { applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

import {
  DRINKS_FETCH_SUCCESS,
  ACTIVE_DRINK_FETCH_SUCCESS,
} from "../actions/actionType";

const activeDrink = {};
const drinks = [];
const loading = true;
const initialState = { activeDrink, drinks, loading };

function mainReducer(state = initialState, action) {
  switch (action.type) {
    case DRINKS_FETCH_SUCCESS:
      return { ...state, loading: false, drinks: action.payload };
    case ACTIVE_DRINK_FETCH_SUCCESS:
      return { ...state, activeDrink: action.payload };
    default:
      return state;
  }
}

let store = createStore(mainReducer, applyMiddleware(thunkMiddleware));
export default store;
