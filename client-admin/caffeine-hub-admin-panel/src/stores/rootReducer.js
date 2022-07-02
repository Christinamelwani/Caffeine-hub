import { combineReducers } from "redux";
import userReducer from "./userReducer";
import drinkReducer from "./drinkReducer";
import categoryReducer from "./categoryReducer";
const initialState = { isLoggedIn: false, drinks: [] };

const rootReducer = combineReducers({
  drink: drinkReducer,
  user: userReducer,
  category: categoryReducer,
});

export default rootReducer;
