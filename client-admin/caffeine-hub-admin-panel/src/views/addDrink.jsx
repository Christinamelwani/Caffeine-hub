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
    ingredients: "",
  });
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const dispatch = useDispatch();

  const submitNewDrink = (drink) => {
    if (drink.ingredients) {
      drink.ingredients = drink.ingredients.split("\n");
    }
    dispatch(postDrink(drink, Navigation));
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
