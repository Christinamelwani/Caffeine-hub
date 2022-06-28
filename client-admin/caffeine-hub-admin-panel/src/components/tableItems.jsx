export default function TableItem({ item, deleteDrink }) {
  const handleDelete = (e) => {
    const id = e.target.name;
    deleteDrink(id);
  };
  return (
    <tr className="border-b odd:bg-white even:bg-purple-50 odd:dark:bg-purple-800 even:dark:bg-purple-700">
      <td className="px-6 py-4 ">{item.id}</td>
      <td className="px-6 py-4">{item.name}</td>
      <td className="px-6 py-4">{item.categoryId}</td>
      <td className="px-6 py-4">{item.price}</td>
      <td className="px-6 py-4">{item.authorId}</td>
      <td className="px-6 py-4">
        <img src={item.imgUrl} className="h-[100px] w-[100px]" alt="" />
      </td>
      <td className="px-6 py-4 gap-3 flex">
        <button className="bg-yellow-500 text-white rounded px-4 py-2">
          Edit
        </button>
        <button
          onClick={handleDelete}
          name={item.id}
          className="bg-red-500 text-white rounded px-4 py-2"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
