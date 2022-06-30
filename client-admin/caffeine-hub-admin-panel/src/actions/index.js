import { DRINKS_FETCH } from "./actionTypes";

async function fetchData(url, type, dispatch) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new { name: "failed" }();
    }
    const fetchedDrinks = await response.json();
    dispatch({ type, payload: fetchedDrinks });
  } catch (err) {
    console.log(err);
  }
}

export const fetchDrinks = () => {
  return (dispatch) => {
    fetchData("http://localhost:3000/drinks", DRINKS_FETCH, dispatch);
  };
};
