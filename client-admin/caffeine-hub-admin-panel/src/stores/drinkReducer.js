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
};

const drinkReducer = (state = initialState, action) => {
  switch (action.type) {
    case DRINKS_FETCH:
      return { ...state, drinks: action.payload };
    case DRINK_DETAIL_FETCH:
      return { ...state, drink: action.payload };
    default:
      return state;
  }
};

export default drinkReducer;
