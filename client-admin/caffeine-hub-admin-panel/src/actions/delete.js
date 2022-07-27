import { CATEGORIES_FETCH, DRINKS_FETCH } from "./actionTypes";
import { fetchData } from "./fetch";
import swal from "sweetalert";
async function deleteData(id, url, type, dispatch) {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
    });
    if (!response.ok) {
      throw { name: "Failed to delete" };
    }
    fetchData(url, type, dispatch);
  } catch (err) {
    swal({
      title: "Error!",
      text: err.message,
      icon: "error",
    });
  }
}

export const deleteDrinks = (id) => {
  return (dispatch) => {
    deleteData(
      id,
      "https://caffeine-hub-v1.herokuapp.com/drinks",
      DRINKS_FETCH,
      dispatch
    );
  };
};

export const deleteCategories = (id) => {
  return (dispatch) => {
    deleteData(
      id,
      "https://caffeine-hub-v1.herokuapp.com/categories",
      CATEGORIES_FETCH,
      dispatch
    );
  };
};
