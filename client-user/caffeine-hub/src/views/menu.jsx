import { useEffect, useState } from "react";
import Card from "../components/card";
export default function Menu({ navigate }) {
  const [drinks, setDrinks] = useState([]);
  function showDetail(id) {
    navigate(`/drinks/${id}`);
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:3000/drinks");
        if (!response.ok) {
          throw new { name: "failed" }();
        }
        const fetchedDrinks = await response.json();
        setDrinks(fetchedDrinks);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
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
