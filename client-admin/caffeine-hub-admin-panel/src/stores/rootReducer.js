import { combineReducers } from "redux";
import userReducer from "./userReducer";
import drinkReducer from "./drinkReducer";
import categoryReducer from "./categoryReducer";
import ingredientReducer from "./ingredientReducer";

const rootReducer = combineReducers({
  drink: drinkReducer,
  user: userReducer,
  category: categoryReducer,
  ingredient: ingredientReducer,
});

export default rootReducer;
