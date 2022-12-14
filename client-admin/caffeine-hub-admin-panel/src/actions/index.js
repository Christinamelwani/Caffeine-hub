import { IS_LOGGED_IN_SET_TRUE, baseUrl } from "./actionTypes";
import swal from "sweetalert";
export function login(email, password, Navigation) {
  return async (dispatch) => {
    try {
      const response = await fetch(`${baseUrl}/users/login`, {
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

export function register(user, Navigation) {
  return async (dispatch) => {
    try {
      const response = await fetch(`${baseUrl}/users/register`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        const error = await response.json();
        throw { message: error.message, detail: error.detail };
      }
      dispatch(login(user.email, user.password, Navigation));
    } catch (err) {
      swal({
        title: "Error!",
        text: err.message + "\n" + err.detail,
        icon: "error",
      });
    }
  };
}
