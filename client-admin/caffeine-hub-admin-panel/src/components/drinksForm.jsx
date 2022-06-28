export default function DrinksForm({
  newDrink,
  setNewDrink,
  submitNewDrink,
  setDisplayAddForm,
}) {
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewDrink({
      ...newDrink,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitNewDrink(newDrink);
    setDisplayAddForm(false);
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
            value={newDrink.name}
            className="px-4 py-1 display-none border-blue-200 rounded border"
          />
        </div>
        <div className="flex self-start justify-between flex-col">
          <label className="bold" htmlFor="Category">
            Category:
          </label>
          <select
            className="px-10 rounded text-lg py-1 display-none border-blue-200  border"
            value={newDrink.categoryId}
            onChange={handleChange}
            name="category"
            id=""
          >
            <option value="1">Espresso-based</option>
            <option value="2">Tea-based</option>
            <option value="3">Flavored milk</option>
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
            value={newDrink.price}
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
            value={newDrink.imgUrl}
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
            value={newDrink.description}
            onChange={handleChange}
            type="number"
            className="px-4 py-1 display-none border-blue-200 rounded border"
          />
        </div>
      </div>
      <input
        className="cursor-pointer self-end mr-8 mt-2 bg-blue-500 text-white px-4 rounded py-2"
        type="submit"
        value="Add drink"
        id=""
      />
    </form>
  );
}
