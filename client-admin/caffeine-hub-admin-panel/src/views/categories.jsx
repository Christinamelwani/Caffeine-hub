import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../actions/fetch";
import Table from "../components/table";
import { deleteCategories } from "../actions/delete";
export default function Categories({ Navigation }) {
  const categories = useSelector((state) => state.category.categories);
  const dispatch = useDispatch();

  const getData = () => {
    dispatch(fetchCategories());
  };

  function deleteData(id) {
    dispatch(deleteCategories(id));
  }

  useEffect(getData, []);

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
        deleteData={deleteData}
        showUpdateForm={null}
      />
    </div>
  );
}
