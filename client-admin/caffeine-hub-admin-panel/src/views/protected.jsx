import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";
import { IS_LOGGED_IN_SET_TRUE } from "../actions/actionTypes";
export default function ProtectedRoute({ isLoggedIn, children }) {
  const dispatch = useDispatch();
  if (isLoggedIn && localStorage.getItem("access_token")) {
  } else if (localStorage.getItem("access_token")) {
    dispatch({ type: IS_LOGGED_IN_SET_TRUE });
  } else {
    return <Navigate to="/login" replace />;
  }
  return children;
}
