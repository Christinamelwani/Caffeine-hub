import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { fetchActiveDrink } from "../actions";
export default function Detail({ setDetailView }) {
  const activeDrink = useSelector((state) => state.activeDrink);
  const dispatch = useDispatch();
  const { id } = useParams();
  let filler = "";

  useEffect(() => {
    dispatch(fetchActiveDrink(id));
  }, [id]);

  const getIngredients = () => {
    if (activeDrink.Ingredients) {
      filler = activeDrink.Ingredients.map((el) => {
        return <li key={el.id}>{el.name}</li>;
      });
    }
    return filler;
  };

  return (
    <div className="flex flex-col items-center">
      <div className="self-start flex flex-row">
        <Link to="/drinks">
          <button className="ml-4 scale-100 hover:scale-110">
            <img
              className="w-[20px] rounded"
              src="https://cdn-icons-png.flaticon.com/512/2223/2223615.png"
            ></img>
            Go back
          </button>
        </Link>
      </div>
      <img
        name={activeDrink.id}
        className=" w-[200px] h-[200px]"
        src={activeDrink.imgUrl}
      ></img>
      <h1 className="text-xl">{activeDrink.name}</h1>
      <h2>
        Harga:{" "}
        {new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
        }).format(activeDrink.price)}
      </h2>
      <h2>{activeDrink.description}</h2>
      <div className="py-2 text-left">
        <h2>Ingredients:</h2>
        <ul className="list-disc">{getIngredients()}</ul>
      </div>
    </div>
  );
}
