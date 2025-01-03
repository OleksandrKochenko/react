import { useEffect, useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";
import { ticTacToeField, winCombinations } from "./data";

export const TicTacToe = () => {
  const [resultX, setResultX] = useState([]);
  const [resultO, setResultO] = useState([]);
  const [turn, setTurn] = useState("X");
  const [winner, setWinner] = useState("");
  const [winsFields, setWinsFields] = useState([]);

  useEffect(() => {
    for (const el of winCombinations) {
      if (el.every((item) => resultX.includes(item))) {
        setWinsFields([...el]);
        setWinner("X");
        return;
      }
      if (el.every((item) => resultO.includes(item))) {
        setWinsFields([...el]);
        setWinner("O");
        return;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resultX, resultO]);

  const restart = () => {
    setResultO([]);
    setResultX([]);
    setTurn("X");
    setWinner("");
    setWinsFields([]);
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl text-orange-200 my-8">Tic-Tac-Toe</h2>
      {winner && (
        <ConfettiExplosion
          duration={2500}
          particleSize={7}
          particleCount={150}
          colors={[
            "#F59E0B",
            "#0B62F5",
            "#A5B4FC",
            "#FCEDA5",
            "#15803D",
            "#801558",
            "#8B5CF6",
            "#EC4899",
            "#F43F5E",
          ]}
        />
      )}
      <p className="my-4 text-xl">
        {winner ? (
          <span>
            Player <span className="text-amber-500">{winner}</span> wins!
          </span>
        ) : resultO.length + resultX.length === 9 ? (
          `It's draw! Try again`
        ) : (
          <span>
            Player <span className="text-amber-500 ">{turn} </span> turn
          </span>
        )}
      </p>
      <div className="grid grid-cols-3 gap-0 text-xl">
        {ticTacToeField.map((el, idx) => (
          <button
            className={` w-16 h-16 hover:text-inherit ${
              (resultX.includes(el) || resultO.includes(el) || winner) &&
              "pointer-events-none "
            } ${
              winsFields.includes(el) && "text-amber-500"
            } [&:not(:nth-child(3n))]:border-r [&:not(:nth-last-child(-n+3))]:border-b hover:backdrop-brightness-95`}
            key={idx}
            onClick={() => {
              turn === "X"
                ? setResultX((prevState) => {
                    return [...prevState, el];
                  })
                : setResultO((prevState) => [...prevState, el]);
              setTurn((prevState) => (prevState === "X" ? "O" : "X"));
            }}
            disabled={resultX.includes(el) || resultO.includes(el) || winner}
          >
            {resultX.includes(el) ? "X" : resultO.includes(el) ? "O" : ""}
          </button>
        ))}
      </div>
      <button
        onClick={() => restart()}
        className="uppercase my-4 px-4 py-2 border rounded-lg hover:text-amber-500 hover:border-amber-500"
      >
        restart
      </button>
    </div>
  );
};
