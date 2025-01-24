import { GrandChild } from "./GrandChild";

export const Child = ({ color, setHeaderColor }) => {
  return (
    <div
      className={`w-3/4 flex flex-col items-center ${color} border-2 border-white`}
    >
      <h2 className="text-2xl text-orange-200 my-8 mt-10 w-full text-center">
        I am the Child
      </h2>

      <GrandChild color={color} setHeaderColor={setHeaderColor} />
    </div>
  );
};
