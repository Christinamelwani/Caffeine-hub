import { useState, useEffect } from "react";
import Table from "../components/table";
export default function Dashboard(props) {
  const [drinks, setDrinks] = useState([]);
  useEffect(() => {
    async function getDrinks() {
      const results = await fetch("http://localhost:3000/drinks");
      const fetchedDrinks = await results.json();
      setDrinks(fetchedDrinks);
    }
    getDrinks();
  }, []);
  return (
    <div className="ml-4 pt-4 flex h-full flex-col grow">
      <div className="flex flex-row justify-between w-[80vw]">
        <h1 className="text-xl font-bold">Drinks list</h1>
        <button className="self-start mr-4 bg-blue-600 py-2 px-4 rounded text-white">
          Add drink
        </button>
      </div>
      <Table items={drinks} />
    </div>
  );
}
