export default function Card({ drink, showDetail }) {
  return (
    <div
      className="flex flex-col items-center text-orange-900 scale-100 hover:scale-110"
      onClick={() => showDetail(drink.id)}
    >
      <img
        name={drink.id}
        className="cursor-pointer rounded-full w-[200px] h-[200px]"
        src={drink.imgUrl}
      ></img>
      <h1 className="cursor-pointer">{drink.name}</h1>
      <h1 className="cursor-pointer">
        {new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
        }).format(drink.price)}
      </h1>
    </div>
  );
}
