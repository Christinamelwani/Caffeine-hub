import { CATEGORIES_FETCH, DRINKS_FETCH } from "./actionTypes";
import { fetchData } from "./fetch";
async function updateData(id, newData, url, type, dispatch) {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: "PUT",
      body: JSON.stringify(newData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw { name: "Failed to update" };
    }
    fetchData(url, type, dispatch);
  } catch (err) {
    console.log(err);
  }
}

export const updateDrinks = (id, newData) => {
  return (dispatch) => {
    updateData(
      id,
      newData,
      "http://localhost:3000/drinks",
      DRINKS_FETCH,
      dispatch
    );
  };
};
