import { Link } from "react-router-dom";
import { IS_LOGGED_IN_SET_FALSE } from "../actions/actionTypes";
import { useDispatch } from "react-redux";

export default function Sidebar() {
  const dispatch = useDispatch();
  function logout() {
    localStorage.removeItem("access_token");
    dispatch({ type: IS_LOGGED_IN_SET_FALSE });
  }
  return (
    <div className="flex bg-black text-white flex-col w-64 h-screen px-4 py-8 overflow-y-auto border-r">
      <div className="text-xl text-bold text-yellow-500 mb-12">
        Caffeine Hub
      </div>
      <div className="flex flex-col gap-3">
        <Link to="/">
          <div className="py-2  text-lg hover:bg-neutral-800 cursor-pointer">
            Dashboard
          </div>
        </Link>
        <Link to="/categories">
          <div className="py-2  text-lg hover:bg-neutral-800 cursor-pointer">
            Categories
          </div>
        </Link>
        <Link to="/register">
          <div className="py-2  text-lg hover:bg-neutral-800 cursor-pointer">
            Register Admin
          </div>
        </Link>
        <div
          onClick={logout}
          className="py-2  text-lg hover:bg-neutral-800 cursor-pointer"
        >
          Sign out
        </div>
      </div>
    </div>
  );
}
