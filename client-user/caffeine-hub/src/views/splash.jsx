export default function splash({ navigate }) {
  const displayList = () => {
    navigate(`/drinks`);
  };

  return (
    <div className="text-white bg-black h-[80vh] justify-center flex flex-col items-center">
      <h1 className="text-4xl center">Selamat datang di Caffeine hub!</h1>
      <button
        onClick={displayList}
        className="mt-8 text-neutral-700 bg-white w-[50%] py-2 rounded"
      >
        Temukan kopi kesukaanmu...
      </button>
    </div>
  );
}
