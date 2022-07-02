import TableItem from "./tableItems";
export default function Table({ type, items, deleteData, showUpdateForm }) {
  const listItems = items.map((el) => (
    <TableItem
      item={el}
      key={el.id}
      updateForm={showUpdateForm}
      deleteAction={deleteData}
      type={type}
    />
  ));
  return (
    <div className="relative mr-2 mt-2 overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-white">
        {type === "drinks" ? (
          <thead className="text-xs text-white uppercase bg-purple-500">
            <tr>
              <th scope="col" className="px-6 py-3">
                No
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Ingredients
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Created By
              </th>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Edit
              </th>
            </tr>
          </thead>
        ) : (
          <thead className="text-xs text-white uppercase bg-purple-500">
            <tr>
              <th scope="col" className="px-6 py-3">
                No
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Delete
              </th>
            </tr>
          </thead>
        )}

        <tbody>{listItems}</tbody>
      </table>
    </div>
  );
}
