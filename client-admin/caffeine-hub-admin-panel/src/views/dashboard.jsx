import { useState, useEffect } from "react";
import DrinksForm from "../components/drinksForm";
import Table from "../components/table";
export default function Dashboard({ displayAddForm, setDisplayAddForm }) {
  const [drinks, setDrinks] = useState([]);
  const [newDrink, setNewDrink] = useState({
    name: "",
    price: "",
    categoryId: 1,
    description: "",
    imgUrl: "",
    authorId: 1,
  });
  const [reloadPending, setReloadPending] = useState(false);

  useEffect(() => {
    async function getDrinks() {
      try {
        const results = await fetch("http://localhost:3000/drinks");
        const fetchedDrinks = await results.json();
        setDrinks(fetchedDrinks);
      } catch (err) {
        console.log(err);
      }
    }
    getDrinks();
  }, [reloadPending]);

  const submitNewDrink = (drink) => {
    async function postData(data = { drink }) {
      const response = await fetch("http://127.0.0.1:3000/drinks", {
        method: "POST",
        body: JSON.stringify(data.drink),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const responseJson = await response.json();
      reloadPending ? setReloadPending(false) : setReloadPending(true);
      return responseJson;
    }
    postData();
  };

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
      reloadPending ? setReloadPending(false) : setReloadPending(true);
      return responseJson;
    }
    deleteData();
  };

  return (
    <div className="ml-4 pt-4 flex h-full flex-col grow">
      <div className="flex flex-row justify-between w-[80vw]">
        <h1 className="text-xl font-bold">Drinks list</h1>
        {!displayAddForm ? (
          <button
            onClick={() => setDisplayAddForm(true)}
            className="self-start mr-4 bg-blue-600 py-2 px-4 rounded text-white"
          >
            Add drink
          </button>
        ) : null}
      </div>
      {displayAddForm ? (
        <DrinksForm
          newDrink={newDrink}
          setNewDrink={setNewDrink}
          submitNewDrink={submitNewDrink}
          setDisplayAddForm={setDisplayAddForm}
        />
      ) : (
        <Table items={drinks} deleteDrink={deleteDrink} />
      )}
    </div>
  );
}
