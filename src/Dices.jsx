import { Icon } from "@iconify/react/dist/iconify.js";
import { dices } from "./data";
import { useEffect, useState } from "react";

export const Dices = () => {
  const [dicesQty, setDicesQty] = useState(3);

  const getRandomSide = () => Math.ceil(Math.random() * 6);
  const setDices = () => {
    const dicesSet = [];
    for (let index = 0; index < dicesQty; index++) {
      dicesSet.push(getRandomSide());
    }
    return dicesSet;
  };

  const [result, setResult] = useState(null);
  const [isRolling, setIsRolling] = useState(false);

  useEffect(() => {
    const currentDices = setDices();
    setResult(currentDices);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dicesQty]);

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
    <>
      <h2 className="text-3xl text-orange-200 mt-8">Dices Game</h2>
      <div className="grid grid-cols-3 gap-4 my-10">
        {result?.map((dice, idx) => (
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
                  {!!el && (
                    <Icon icon="ic:twotone-circle" className="text-xl" />
                  )}
                </div>
              ))}
          </div>
        ))}
      </div>
      <div>
        <div>Result: {result?.reduce((acc, curr) => acc + curr, 0)}</div>
        <button
          className="border rounded-xl p-2 my-2 mx-4 w-20 hover:text-amber-400"
          onClick={handleClick}
        >
          Roll
        </button>
        <select
          value={dicesQty}
          className="border rounded-xl mx-4 w-20 p-2 bg-[darkslategray] text-center hover:text-amber-400 "
          onChange={(e) => setDicesQty(e.target.value)}
        >
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
        </select>
      </div>
    </>
  );
};
