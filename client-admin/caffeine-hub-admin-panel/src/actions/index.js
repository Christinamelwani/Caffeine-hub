import { IS_LOGGED_IN_SET_TRUE } from "./actionTypes";
import swal from "sweetalert";
export function login(email, password, Navigation) {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:3000/users/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        const error = await response.json();
        throw { message: error.message };
      }
      const { access_token } = await response.json();
      localStorage.setItem("access_token", access_token);
      dispatch({ type: IS_LOGGED_IN_SET_TRUE });
      Navigation("/");
    } catch (err) {
      swal({
        title: "Error!",
        text: err.message,
        icon: "error",
      });
    }
  };
}
