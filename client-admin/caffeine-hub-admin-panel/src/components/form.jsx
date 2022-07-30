import { useDispatch, useSelector } from "react-redux";

export default function ReusableForm({
  action,
  data,
  setData,
  actionName,
  type,
  id,
}) {
  const categories = useSelector((state) => state.category.categories);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    action(data);
  };

  if (type === "drink") {
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
              value={data.name}
              className="px-4 py-1 display-none border-blue-200 rounded border"
            />
          </div>
          <div className="flex self-start justify-between flex-col">
            <label className="bold" htmlFor="Category">
              Category:
            </label>

            <select
              className="px-8 ml-3 rounded text-lg py-1 display-none border-blue-200  border"
              value={data.categoryId}
              onChange={handleChange}
              name="categoryId"
            >
              <option value="">Select a category</option>
              {categories.map((el) => {
                return (
                  <option value={el.id} key={el.id}>
                    {el.name}
                  </option>
                );
              })}
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
              value={data.price}
              onChange={handleChange}
              type="number"
              className="px-4 py-1 display-none border-blue-200 rounded border"
            />
          </div>
          <div className="ml-3 flex justify-between flex-col">
            <label className="bold" htmlFor="Category">
              Image Url:
            </label>
            <input
              onChange={handleChange}
              name="imgUrl"
              value={data.imgUrl}
              type="text"
              className="px-4 py-1 display-none border-blue-200 rounded border"
            />
          </div>
        </div>
        <div className="flex flex-row justify-between px-10">
          <div className="flex justify-between flex-col w-50">
            <label className="rounded bold" htmlFor="description">
              Description:
            </label>
            <textarea
              name="description"
              value={data.description}
              onChange={handleChange}
              type="number"
              className="px-4 py-1 display-none border-blue-200 rounded border"
            />
          </div>
        </div>
        {actionName !== "Update Drink" ? (
          <div className="flex flex-row justify-between px-10">
            <div className="flex justify-between flex-col w-50">
              <label className="rounded bold" htmlFor="ingredients">
                Ingredients (write one per line):
              </label>
              <textarea
                name="ingredients"
                value={data.ingredients}
                onChange={handleChange}
                type="number"
                className="px-4 py-1 display-none border-blue-200 rounded border"
              />
            </div>
          </div>
        ) : null}

        <input
          className="cursor-pointer self-end mr-8 mt-2 bg-blue-500 text-white px-4 rounded py-2"
          type="submit"
          value={actionName}
          id=""
        />
      </form>
    );
  } else {
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
              value={data.name}
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
}
