import ReusableForm from "../components/form";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function UpdateDrink({ Navigation }) {
  const { id } = useParams();

  const [fetchedDrink, setFetchedDrink] = useState({
    name: "",
    price: "",
    categoryId: 1,
    description: "",
    imgUrl: "",
    authorId: 1,
  });

  useEffect(() => {
    async function getDrink() {
      try {
        const results = await fetch(`http://localhost:3000/drinks/${id}`);
        const fetchedDrink = await results.json();
        setFetchedDrink(fetchedDrink);
      } catch (err) {
        console.log(err);
      }
    }
    getDrink();
  }, []);

  const updateDrink = (drink) => {
    async function updateData(data = { drink }) {
      const response = await fetch(`http://127.0.0.1:3000/drinks/${id}`, {
        method: "PUT",
        body: JSON.stringify(data.drink),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const responseJson = await response.json();
      return responseJson;
    }
    updateData();
    Navigation("/");
  };
  return (
    <div>
      <ReusableForm
        action={updateDrink}
        drink={fetchedDrink}
        setDrink={setFetchedDrink}
        actionName="Update Drink"
      />
    </div>
  );
}
