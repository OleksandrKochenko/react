import { Icon } from "@iconify/react/dist/iconify.js";
import { dices } from "./data";
import { useEffect, useState } from "react";

export const Dices = () => {
  const getRandomSide = () => Math.ceil(Math.random() * 6);
  const [result, setResult] = useState([1, 2, 3, 4, 5, 6]);
  const [isRolling, setIsRolling] = useState(false);

  let timeoutId;
  const handleClick = () => {
    setIsRolling(true);
    const res = [];
    for (let index = 0; index < result.length; index++) {
      res.push(getRandomSide());
    }
    timeoutId = setTimeout(() => {
      setResult(res);
      setIsRolling(false);
    }, 1000);
  };
  useEffect(() => {
    clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result]);

  return (
    <div className="grid grid-cols-3 gap-4 my-10">
      {result.map((dice, idx) => (
        <div
          key={idx}
          className={`h-20 w-20 p-2 grid grid-cols-3 border rounded-xl ${
            isRolling && "animate-spin"
          }`}
        >
          {dices
            .find((el) => el.value === dice)
            .shape.map((el, idx) => (
              <div key={idx} className="flex items-center justify-center">
                {!!el && <Icon icon="ic:twotone-circle" className="text-xl" />}
              </div>
            ))}
        </div>
      ))}
      <div>
        <div>Result: {result.reduce((acc, curr) => acc + curr, 0)}</div>
        <button
          className="border rounded-xl p-2 my-2 w-20"
          onClick={handleClick}
        >
          Roll
        </button>
      </div>
    </div>
  );
};
