import { useState } from "react";

export default function Login({ Navigation, setIsLoggedIn }) {
  const [user, setUser] = useState({ username: "", password: "" });
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(user.password, user.username);
    if (user.password === "test" && user.username === "test") {
      setIsLoggedIn(true);
      Navigation("/");
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
            htmlFor="username"
          >
            Username
          </label>
          <input
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="username"
            type="text"
            name="username"
            value={user.username}
            placeholder="Username"
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
