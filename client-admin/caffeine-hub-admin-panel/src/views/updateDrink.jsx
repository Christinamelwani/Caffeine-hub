import ReusableForm from "../components/form";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCategories, fetchDrink } from "../actions/fetch";
import { useDispatch, useSelector } from "react-redux";
import { updateDrinks } from "../actions/put";
export default function UpdateDrink({ Navigation }) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [fetchedDrink, setFetchedDrink] = useState({
    name: "",
    price: "",
    categoryId: "",
    description: "",
    imgUrl: "",
    authorId: 1,
  });
  // const drink = useSelector((state) => state.drink.drink);

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const updateDrink = (drink) => {
    dispatch(updateDrinks(id, drink));
    Navigation("/");
  };
  return (
    <div>
      <ReusableForm
        action={updateDrink}
        data={fetchedDrink}
        setData={setFetchedDrink}
        actionName="Update Drink"
        type="drink"
        update={true}
      />
    </div>
  );
}
