import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { fetchActiveDrink } from "../actions";
export default function Detail({ setDetailView }) {
  const activeDrink = useSelector((state) => state.activeDrink);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchActiveDrink(id));
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
        name={activeDrink.id}
        className="cursor-pointer  w-[200px] h-[200px]"
        src={activeDrink.imgUrl}
      ></img>
      <h1 className="text-xl">{activeDrink.name}</h1>
      <h2>Harga: Rp.{activeDrink.price}</h2>
      <h2>{activeDrink.description}</h2>
    </div>
  );
}
