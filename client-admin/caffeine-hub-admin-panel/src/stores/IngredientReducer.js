import { INGREDIENTS_FETCH } from "../actions/actionTypes";

const initialState = { ingredients: [] };

const ingredientReducer = (state = initialState, action) => {
  switch (action.type) {
    case INGREDIENTS_FETCH:
      return { ...state, ingredients: action.payload };
    default:
      return state;
  }
};

export default ingredientReducer;
