import {
  DRINKS_FETCH,
  CATEGORIES_FETCH,
  DRINK_DETAIL_FETCH,
} from "./actionTypes";

export async function fetchData(url, type, dispatch) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new { name: "failed" }();
    }
    const fetchedData = await response.json();
    dispatch({ type, payload: fetchedData });
  } catch (err) {
    console.log(err);
  }
}

export const fetchDrinks = () => {
  return (dispatch) => {
    fetchData("http://localhost:3000/drinks", DRINKS_FETCH, dispatch);
  };
};

export const fetchDrink = (id) => {
  return (dispatch) => {
    fetchData(
      `http://localhost:3000/drinks/${id}`,
      DRINK_DETAIL_FETCH,
      dispatch
    );
  };
};

export const fetchCategories = () => {
  return (dispatch) => {
    fetchData("http://localhost:3000/categories", CATEGORIES_FETCH, dispatch);
  };
};
