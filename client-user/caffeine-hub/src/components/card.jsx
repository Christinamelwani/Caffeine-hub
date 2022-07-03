export default function Card({ drink, showDetail }) {
  return (
    <div className=" flex flex-col items-center">
      <img
        onClick={() => showDetail(drink.id)}
        name={drink.id}
        className="cursor-pointer rounded-full w-[200px] h-[200px]"
        src={drink.imgUrl}
      ></img>
      <h1>{drink.name}</h1>
      <h1>{drink.price}</h1>
    </div>
  );
}
