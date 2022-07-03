import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "../actions";
import { IS_LOGGED_IN_SET_TRUE } from "../actions/actionTypes";

export default function Login({ Navigation }) {
  const dispatch = useDispatch();
  const [user, setUser] = useState({ email: "", password: "" });
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  }

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      dispatch({ type: IS_LOGGED_IN_SET_TRUE });
      Navigation("/");
    }
  }, []);
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      dispatch(login(user.email, user.password, Navigation));
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="flex items-center justify-center pt-20">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-[80vw] shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col"
      >
        <div className="mb-4">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="email"
            type="text"
            name="email"
            value={user.email}
            placeholder="email"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            value={user.password}
            onChange={handleChange}
            className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
            id="password"
            name="password"
            type="password"
            placeholder="******************"
          />
        </div>
        <div className="flex items-center justify-between">
          <input
            className="cursor-pointer bg-blue-500 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
            type="submit"
            value="Sign In"
          />
        </div>
      </form>
    </div>
  );
}
