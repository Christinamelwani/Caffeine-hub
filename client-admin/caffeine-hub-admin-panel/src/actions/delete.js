import { CATEGORIES_FETCH, DRINKS_FETCH } from "./actionTypes";
import { fetchData } from "./fetch";
async function deleteData(id, url, type, dispatch) {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw { name: "Failed to delete" };
    }
    fetchData(url, type, dispatch);
  } catch (err) {
    console.log(err);
  }
}

export const deleteDrinks = (id) => {
  return (dispatch) => {
    deleteData(id, "http://localhost:3000/drinks", DRINKS_FETCH, dispatch);
  };
};

export const deleteCategories = (id) => {
  return (dispatch) => {
    deleteData(
      id,
      "http://localhost:3000/categories",
      CATEGORIES_FETCH,
      dispatch
    );
  };
};
