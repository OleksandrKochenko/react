export const GrandChild = ({ color, setHeaderColor }) => {
  return (
    <div
      className={`w-3/4 flex flex-col items-center ${color} border-2 border-white`}
    >
      <h2 className="text-2xl text-orange-200 my-8 mt-10 w-full text-center">
        I am the GrandChild
      </h2>
      <div className="flex justify-between w-1/2 py-4">
        <button
          onClick={() => setHeaderColor("bg-pink-400")}
          className="bg-pink-400 h-10 w-20 p-1 rounded-md border-1 border border-black"
        >
          Pink
        </button>
        <button
          onClick={() => setHeaderColor("bg-blue-400")}
          className="bg-blue-400 h-10 w-20 p-1 rounded-md border-1 border border-black"
        >
          Blue
        </button>
        <button
          onClick={() => setHeaderColor("bg-green-400")}
          className="bg-green-400 h-10 w-20 p-1 rounded-md border-1 border border-black"
        >
          Green
        </button>
      </div>
    </div>
  );
};
