import { CATEGORIES_FETCH, DRINKS_FETCH } from "./actionTypes";
import { fetchData } from "./fetch";
async function postData(newData, url, type, dispatch) {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(newData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw { name: "Failed to post" };
    }
    fetchData(url, type, dispatch);
  } catch (err) {
    console.log(err);
  }
}

export const postDrink = (newDrink) => {
  return (dispatch) => {
    postData(newDrink, "http://localhost:3000/drinks", DRINKS_FETCH, dispatch);
  };
};

export const postCategory = (newCategory) => {
  return (dispatch) => {
    postData(
      newCategory,
      "http://localhost:3000/categories",
      CATEGORIES_FETCH,
      dispatch
    );
  };
};
