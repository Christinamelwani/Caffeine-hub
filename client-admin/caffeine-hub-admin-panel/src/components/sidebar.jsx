import { Link } from "react-router-dom";
export default function Sidebar() {
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
        <div className="py-2  text-lg hover:bg-neutral-800 cursor-pointer">
          Categories
        </div>
        <div className="py-2  text-lg hover:bg-neutral-800 cursor-pointer">
          Register Admin
        </div>
        <div className="py-2  text-lg hover:bg-neutral-800 cursor-pointer">
          Sign out
        </div>
      </div>
    </div>
  );
}
