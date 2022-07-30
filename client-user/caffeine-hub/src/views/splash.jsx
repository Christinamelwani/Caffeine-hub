export default function splash({ navigate }) {
  const displayList = () => {
    navigate(`/drinks`);
  };

  return (
    <div className="text-white  bg-norepeat bg-[url('./img/splash-bg.avif')] bg-opacity-25 bg-cover h-[80vh] justify-center flex flex-col items-center">
      <div className="justify-center flex flex-col items-center p-10">
        <h1
          className="inline text-5xl center drop-shadow-xl shadow-white"
          style={{
            fontFamily: "verdana",
            webkitTextStroke: "2px black",
            textShadow: `3px 3px 0 #000,
        -1px -1px 0 #000,  
         1px -1px 0 #000,
         -1px 1px 0 #000,
          1px 1px 0 #000`,
          }}
        >
          Selamat Datang di Caffeine Hub!
        </h1>
        <button
          onClick={displayList}
          className="mt-8 text-xl text-neutral-700 bg-white w-[50%] py-3 px-2 rounded"
        >
          Temukan kopi kesukaanmu...
        </button>
      </div>
    </div>
  );
}
