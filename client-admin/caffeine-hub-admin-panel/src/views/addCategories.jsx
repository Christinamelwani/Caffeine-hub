import ReusableForm from "../components/form";
import { useState } from "react";

export default function AddDrink({ Navigation }) {
  const [newDrink, setNewDrink] = useState({
    name: "",
    price: "",
    categoryId: "",
    description: "",
    imgUrl: "",
    authorId: 1,
  });

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
      return responseJson;
    }
    Navigation("/");
    postData();
  };
  return (
    <div>
      <ReusableForm
        action={submitNewDrink}
        drink={newDrink}
        setDrink={setNewDrink}
        actionName="Add Drink"
      />
    </div>
  );
}
