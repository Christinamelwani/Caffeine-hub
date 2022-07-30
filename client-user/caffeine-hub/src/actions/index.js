import {
  DRINKS_FETCH_SUCCESS,
  ACTIVE_DRINK_FETCH_SUCCESS,
  baseUrl,
} from "../actions/actionType";

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
    fetchData(`${baseUrl}/drinks`, DRINKS_FETCH_SUCCESS, dispatch);
  };
};

export const fetchActiveDrink = (id) => {
  return (dispatch) => {
    fetchData(`${baseUrl}/drinks/${id}`, ACTIVE_DRINK_FETCH_SUCCESS, dispatch);
  };
};
