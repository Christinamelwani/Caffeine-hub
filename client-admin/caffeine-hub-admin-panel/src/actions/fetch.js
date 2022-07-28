import {
  DRINKS_FETCH,
  CATEGORIES_FETCH,
  DRINK_DETAIL_FETCH,
  baseUrl,
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
    dispatch({ type, payload: fetchedData });
  } catch (err) {
    swal("Server error: items failed to Load!");
  }
}

export const fetchDrinks = () => {
  return (dispatch) => {
    fetchData(`${baseUrl}/drinks`, DRINKS_FETCH, dispatch);
  };
};

export const fetchDrink = (id) => {
  return (dispatch) => {
    fetchData(`${baseUrl}/drinks/${id}`, DRINK_DETAIL_FETCH, dispatch);
  };
};

export const fetchCategories = () => {
  return (dispatch) => {
    fetchData(`${baseUrl}/categories`, CATEGORIES_FETCH, dispatch);
  };
};

export const fetchIngredients = (id) => {
  return (dispatch) => {
    fetchData(`${baseUrl}/categories`, CATEGORIES_FETCH, dispatch);
  };
};
