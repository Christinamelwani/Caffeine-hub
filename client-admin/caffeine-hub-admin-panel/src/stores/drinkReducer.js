import { DRINKS_FETCH, DRINK_DETAIL_FETCH } from "../actions/actionTypes";

const initialState = {
  drinks: [],
  drink: {
    name: "",
    price: "",
    categoryId: "",
    description: "",
    imgUrl: "",
    authorId: 1,
  },
  loading: true,
};

const drinkReducer = (state = initialState, action) => {
  switch (action.type) {
    case DRINKS_FETCH:
      return { ...state, drinks: action.payload, loading: false };
    case DRINK_DETAIL_FETCH:
      return { ...state, drink: action.payload, loading: false };
    default:
      return state;
  }
};

export default drinkReducer;
