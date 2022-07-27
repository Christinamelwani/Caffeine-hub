import {
  DRINKS_FETCH,
  CATEGORIES_FETCH,
  DRINK_DETAIL_FETCH,
} from "./actionTypes";

import swal from "sweetalert";
export async function fetchData(url, type, dispatch) {
  try {
    const response = await fetch(url, {
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    });

    if (!response.ok) {
      throw { name: "failed" };
    }
    const fetchedData = await response.json();
    // console.log(fetchedData[0].Ingredients);
    dispatch({ type, payload: fetchedData });
  } catch (err) {
    swal("Server error: items failed to Load!");
  }
}

export const fetchDrinks = () => {
  return (dispatch) => {
    fetchData(
      "https://caffeine-hub-v1.herokuapp.com/drinks",
      DRINKS_FETCH,
      dispatch
    );
  };
};

export const fetchDrink = (id) => {
  return (dispatch) => {
    fetchData(
      `https://caffeine-hub-v1.herokuapp.com/drinks/${id}`,
      DRINK_DETAIL_FETCH,
      dispatch
    );
  };
};

export const fetchCategories = () => {
  return (dispatch) => {
    fetchData(
      "https://caffeine-hub-v1.herokuapp.com/categories",
      CATEGORIES_FETCH,
      dispatch
    );
  };
};

export const fetchIngredients = (id) => {
  return (dispatch) => {
    fetchData(
      "https://caffeine-hub-v1.herokuapp.com/categories",
      CATEGORIES_FETCH,
      dispatch
    );
  };
};
