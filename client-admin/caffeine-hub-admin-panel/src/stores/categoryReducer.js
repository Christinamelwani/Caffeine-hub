import { CATEGORIES_FETCH } from "../actions/actionTypes";

const initialState = { categories: [] };

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORIES_FETCH:
      return { ...state, categories: action.payload };
    default:
      return state;
  }
};

export default categoryReducer;
