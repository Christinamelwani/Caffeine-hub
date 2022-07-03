import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { login, register } from "../actions";
import { IS_LOGGED_IN_SET_TRUE } from "../actions/actionTypes";

export default function RegisterAdmin({ Navigation }) {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: "",
    password: "",
    phoneNumber: "",
    username: "",
    address: "",
  });
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      dispatch(register(user, Navigation));
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="flex items-center justify-center pt-10">
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
        <div className="mb-4">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username (optional)
          </label>
          <input
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="username"
            type="text"
            name="username"
            value={user.username}
            placeholder="username"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="phoneNumber"
          >
            Phone Number (optional)
          </label>
          <input
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="phoneNumber"
            type="text"
            name="phoneNumber"
            value={user.phoneNumber}
            placeholder="085891111545"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="address"
          >
            Home Address (optional)
          </label>
          <input
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="address"
            type="text"
            name="address"
            value={user.address}
            placeholder="Jl. Sultan Iskandar Muda No.7, RT.5/RW.9, Kby. Lama Sel., Kec. Kby. Lama, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12240, Indonesia"
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
            value="Register"
          />
        </div>
      </form>
    </div>
  );
}
