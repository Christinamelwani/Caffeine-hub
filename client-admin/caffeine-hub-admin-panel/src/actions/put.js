import { CATEGORIES_FETCH, DRINKS_FETCH } from "./actionTypes";
import { fetchData } from "./fetch";
import swal from "sweetalert";
async function updateData(id, data, url, type, dispatch) {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
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
  } catch (err) {
    swal({
      title: "Error!",
      text: err.message + "\n" + err.detail,
      icon: "error",
    });
  }
}

export const updateDrinks = (id, drink) => {
  return (dispatch) => {
    updateData(
      id,
      drink,
      "https://caffeine-hub-v1.herokuapp.com/drinks",
      DRINKS_FETCH,
      dispatch
    );
  };
};
