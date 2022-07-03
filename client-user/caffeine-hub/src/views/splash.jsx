export default function splash({ navigate }) {
  const displayList = () => {
    navigate(`/drinks`);
  };

  return (
    <div className="text-white bg-norepeat bg-[url('https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29mZmVlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60')]  bg-center h-[80vh] justify-center flex flex-col items-center">
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
