import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Table from "../components/table";
export default function Categories({ Navigation }) {
  const [categories, setCategories] = useState([]);
  const [justDeleted, setJustDeleted] = useState(false);
  const getData = () => {
    async function getCategories() {
      try {
        const results = await fetch("http://localhost:3000/categories");
        const fetchedCategories = await results.json();
        setCategories(fetchedCategories);
        setJustDeleted(false);
      } catch (err) {
        console.log(err);
      }
    }
    getCategories();
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
        <h1 className="text-xl font-bold">Categories list</h1>
        <Link to="/categories/add">
          <button className="self-start mr-4 bg-blue-600 py-2 px-4 rounded text-white">
            Add Category
          </button>
        </Link>
      </div>
      <Table
        type="categories"
        items={categories}
        deleteDrink={deleteDrink}
        showUpdateForm={showUpdateForm}
      />
    </div>
  );
}
