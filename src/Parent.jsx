import { useState } from "react";
import { Child } from "./Child";

export const Parent = () => {
  const [color, setColor] = useState("bg-pink-400");
  const [headerColor, setHeaderColor] = useState("bg-slategrey");

  return (
    <div className="w-full flex flex-col items-center border-2 border-white">
      <h2
        className={`text-3xl text-orange-200 my-8 mt-10 w-full text-center ${headerColor}`}
      >
        Parent
      </h2>
      <div className="flex justify-between w-1/4 py-4">
        <button
          className="bg-pink-400  h-10 w-20 p-1 rounded-md"
          onClick={() => setColor("bg-pink-400")}
        >
          Pink
        </button>
        <button
          className="bg-blue-400 h-10 w-20 p-1 rounded-md"
          onClick={() => setColor("bg-blue-400")}
        >
          Blue
        </button>
        <button
          className="bg-green-400 h-10 w-20 p-1 rounded-md"
          onClick={() => setColor("bg-green-400")}
        >
          Green
        </button>
      </div>
      <Child color={color} setHeaderColor={setHeaderColor} />
    </div>
  );
};
