import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function Detail({ setDetailView }) {
  const [drink, setDrink] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function fetchDetail() {
      const response = await fetch(`http://localhost:3000/drinks/${id}`);
      const fetchedDrink = await response.json();
      setDrink(fetchedDrink);
    }
    fetchDetail();
  }, [id]);

  return (
    <div className="flex flex-col items-center">
      <div className="self-start flex flex-row">
        <Link to="/drinks">
          <button className="ml-4">
            <img
              className="w-[20px]"
              src="https://cdn-icons-png.flaticon.com/512/2223/2223615.png"
            ></img>
            Go back
          </button>
        </Link>
      </div>

      <img
        name={drink.id}
        className="cursor-pointer  w-[200px] h-[200px]"
        src={drink.imgUrl}
      ></img>
      <h1 className="text-xl">{drink.name}</h1>
      <h2>Harga: Rp.{drink.price}</h2>
      <h2>{drink.description}</h2>
    </div>
  );
}
