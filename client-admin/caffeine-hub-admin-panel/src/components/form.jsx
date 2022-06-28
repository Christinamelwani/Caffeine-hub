import { useEffect, useState } from "react";

export default function ReusableForm({ action, drink, setDrink, actionName }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("http://localhost:3000/category");
        if (!response.ok) {
          throw { name: "error" };
        }
        const fetched = await response.json();
        setCategories(fetched);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
    console.log(categories);
  }, []);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDrink({
      ...drink,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    action(drink);
  };
  return (
    <form className="pt-6 flex flex-col w-full gap-5" onSubmit={handleSubmit}>
      <div className="flex flex-row justify-between px-10">
        <div className="flex justify-between flex-col">
          <label className="bold" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={drink.name}
            className="px-4 py-1 display-none border-blue-200 rounded border"
          />
        </div>
        <div className="flex self-start justify-between flex-col">
          <label className="bold" htmlFor="Category">
            Category:
          </label>

          <select
            className="px-10 rounded text-lg py-1 display-none border-blue-200  border"
            value={drink.categoryId}
            onChange={handleChange}
            name="categoryId"
            id=""
          >
            {/* {categories.map((el) => {
              <option value={el.id}>{el.name}</option>;
            })} */}
            <option value="1">Espresso-based</option>;
            <option value="2">Tea-based</option>;
            <option value="3">Milk-based</option>;
          </select>
        </div>
      </div>
      <div className="flex flex-row justify-between px-10">
        <div className="flex justify-between flex-col">
          <label className="bold" htmlFor="price">
            Price:
          </label>
          <input
            name="price"
            value={drink.price}
            onChange={handleChange}
            type="number"
            className="px-4 py-1 display-none border-blue-200 rounded border"
          />
        </div>
        <div className="flex justify-between flex-col">
          <label className="bold" htmlFor="Category">
            Image Url:
          </label>
          <input
            onChange={handleChange}
            name="imgUrl"
            value={drink.imgUrl}
            type="text"
            className="px-4 py-1 display-none border-blue-200 rounded border"
          />
        </div>
      </div>
      <div className="flex flex-row justify-between px-10">
        <div className="flex justify-between flex-col w-full">
          <label className="rounded bold" htmlFor="description">
            Description:
          </label>
          <textarea
            name="description"
            value={drink.description}
            onChange={handleChange}
            type="number"
            className="px-4 py-1 display-none border-blue-200 rounded border"
          />
        </div>
      </div>
      <input
        className="cursor-pointer self-end mr-8 mt-2 bg-blue-500 text-white px-4 rounded py-2"
        type="submit"
        value={actionName}
        id=""
      />
    </form>
  );
}
