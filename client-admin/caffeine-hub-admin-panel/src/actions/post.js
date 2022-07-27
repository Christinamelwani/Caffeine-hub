import { CATEGORIES_FETCH, DRINKS_FETCH } from "./actionTypes";
import { fetchData } from "./fetch";
import swal from "sweetalert";
async function postData(newData, url, type, dispatch, Navigation, nextUrl) {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(newData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
    });
    if (!response.ok) {
      const error = await response.json();
      throw { message: error.message, detail: error.detail };
    }
    fetchData(url, type, dispatch);
    Navigation(nextUrl);
  } catch (err) {
    swal({
      title: "Error!",
      text: err.message + "\n" + err.detail,
      icon: "error",
    });
  }
}

export const postDrink = (newDrink, Navigation) => {
  return (dispatch) => {
    postData(
      newDrink,
      "https://caffeine-hub-v1.herokuapp.com/drinks",
      DRINKS_FETCH,
      dispatch,
      Navigation,
      "/"
    );
  };
};

export const postCategory = (newCategory, Navigation) => {
  return (dispatch) => {
    postData(
      newCategory,
      "https://caffeine-hub-v1.herokuapp.com/categories",
      CATEGORIES_FETCH,
      dispatch,
      Navigation,
      "/categories"
    );
  };
};
