import { Link } from "react-router-dom";

export default function Navigation({}) {
  return (
    <nav className="bg-white py-3 flex justify-between px-2 sm:px-4 py-4 ">
      <div className=" cursor-pointer flex items-center">
        <Link to="/">
          <h1 className="text-xl text-bold text-yellow-900">Caffeine hub</h1>
        </Link>
      </div>
      <div className="flex gap-5">
        <div className="flex">
          <form className="flex items-center gap-3">
            <input
              type="text"
              className="bg-slate-200 rounded px-4 py-1"
              placeholder="Search"
            />
            <img
              className="w-[30px] cursor-pointer"
              src="data:image/png;base64,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"
              alt=""
            />
          </form>
        </div>
        <div className="flex items-center">
          <img
            className="w-[30px] cursor-pointer"
            src="https://cdn-icons.flaticon.com/png/512/3502/premium/3502685.png?token=exp=1656334759~hmac=dd1287b686e062c6b62f8b93bdccca87
            "
            alt=""
          />
        </div>
        <div className="flex items-center">
          <img
            className="w-[30px] cursor-pointer"
            src="https://cdn-icons-png.flaticon.com/512/1077/1077063.png"
            alt=""
          />
        </div>
      </div>
    </nav>
  );
}
