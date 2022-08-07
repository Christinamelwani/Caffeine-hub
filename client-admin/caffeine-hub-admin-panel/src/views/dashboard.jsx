import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteDrinks } from "../actions/delete";
import { fetchDrinks } from "../actions/fetch";
import Table from "../components/table";
export default function Dashboard({ Navigation }) {
  const waitingGif = require("../waiting.gif");
  const dispatch = useDispatch();
  const drinks = useSelector((state) => state.drink.drinks);
  const loading = useSelector((state) => state.drink.loading);

  const getData = () => {
    dispatch(fetchDrinks());
  };

  useEffect(getData, []);

  const deleteDrink = (id) => {
    dispatch(deleteDrinks(id));
  };

  const showUpdateForm = (id) => {
    Navigation(`/edit/${id}`);
  };
  if (drinks === [] || loading) {
    return (
      <div className="ml-4 pt-4 flex h-full flex-col grow">
        <div className="flex flex-row justify-between w-[80vw]">
          <img src={waitingGif} alt="wait until the page loads" />
        </div>
      </div>
    );
  }

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
        deleteData={deleteDrink}
        showUpdateForm={showUpdateForm}
      />
    </div>
  );
}
