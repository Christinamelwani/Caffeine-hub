import { useState } from "react";

export default function Dashboard(props) {
  const [drinks, setDrinks] = useState([]);
  return (
    <div className="ml-4 pt-4 flex h-full flex-col grow">
      <div className="flex flex-row justify-between w-[80vw]">
        <h1 className="text-xl font-bold">Drinks list</h1>
        <button className="self-start mr-4 bg-blue-600 py-2 px-4 rounded text-white">
          Add drink
        </button>
      </div>
      <div className="relative mr-2 mt-2 overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-purple-500 dark:text-purple-400">
          <thead className="text-xs text-white uppercase bg-purple-50 dark:bg-purple-700 dark:text-purple-400">
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
          <tbody>
            <tr className="border-b odd:bg-white even:bg-purple-50 odd:dark:bg-purple-800 even:dark:bg-purple-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-white dark:text-white whitespace-nowrap"
              >
                Test
              </th>
              <td className="px-6 py-4">Test</td>
              <td className="px-6 py-4">Test</td>
              <td className="px-6 py-4">Test</td>
              <td className="px-6 py-4">Test</td>
              <td className="px-6 py-4">Test</td>
              <td className="px-6 py-4">
                <button>Edit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
