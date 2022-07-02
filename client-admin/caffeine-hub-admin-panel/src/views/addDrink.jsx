import ReusableForm from "../components/form";
import { useState, useEffect } from "react";
import { postDrink } from "../actions/post";
import { useDispatch } from "react-redux";
import { fetchCategories } from "../actions/fetch";
export default function AddDrink({ Navigation }) {
  const [newDrink, setNewDrink] = useState({
    name: "",
    price: "",
    categoryId: "",
    description: "",
    imgUrl: "",
    authorId: 1,
  });
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const dispatch = useDispatch();

  const submitNewDrink = (drink) => {
    dispatch(postDrink(drink));
    Navigation("/");
  };
  return (
    <div>
      <ReusableForm
        action={submitNewDrink}
        data={newDrink}
        setData={setNewDrink}
        actionName="Add Drink"
        type="drink"
      />
    </div>
  );
}
