import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDrinks } from "../actions";
import Card from "../components/card";
export default function Menu({ navigate }) {
  const drinks = useSelector((state) => state.drinks);
  const dispatch = useDispatch();

  function showDetail(id) {
    navigate(`/drinks/${id}`);
  }

  useEffect(() => {
    dispatch(fetchDrinks());
  }, []);

  const listDrinks = drinks.map((drink) => (
    <Card showDetail={showDetail} drink={drink} key={drink.id}></Card>
  ));

  return (
    <div className="text-yellow-900 mt-4 grid grid-cols-4 gap-4">
      {listDrinks}
    </div>
  );
}
