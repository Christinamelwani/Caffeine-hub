import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Table from "../components/table";
export default function Dashboard({ Navigation }) {
  const [drinks, setDrinks] = useState([]);
  const [justDeleted, setJustDeleted] = useState(false);
  const getData = () => {
    async function getDrinks() {
      try {
        const results = await fetch("http://localhost:3000/drinks");
        const fetchedDrinks = await results.json();
        setDrinks(fetchedDrinks);
        setJustDeleted(false);
      } catch (err) {
        console.log(err);
      }
    }
    getDrinks();
  };

  useEffect(getData, [justDeleted]);

  const deleteDrink = (id) => {
    async function deleteData(drink = { id }) {
      const response = await fetch(`http://127.0.0.1:3000/drinks/${drink.id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const responseJson = await response.json();
      return responseJson;
    }
    deleteData();
    getData();
    setJustDeleted(true);
  };

  const showUpdateForm = (id) => {
    Navigation(`/edit/${id}`);
  };

  return (
    <div className="ml-4 pt-4 flex h-full flex-col grow">
      <div className="flex flex-row justify-between w-[80vw]">
        <h1 className="text-xl font-bold">Drinks list</h1>
        <Link to="/add">
          <button className="self-start mr-4 bg-blue-600 py-2 px-4 rounded text-white">
            Add drink
          </button>
        </Link>
      </div>
      <Table
        type="drinks"
        items={drinks}
        deleteDrink={deleteDrink}
        showUpdateForm={showUpdateForm}
      />
    </div>
  );
}
