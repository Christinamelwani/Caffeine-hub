import { CATEGORIES_FETCH } from "../actions/actionTypes";

const initialState = { categories: [], loading: true };

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORIES_FETCH:
      return { ...state, categories: action.payload, loading: false };
    default:
      return state;
  }
};

export default categoryReducer;
