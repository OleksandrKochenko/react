import { useEffect, useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";
import { correctGrid, initialGrid, moves } from "./data";

export const FifteenPuzzle = () => {
  const [puzzle, setPuzzle] = useState(initialGrid);
  const [isWin, setIsWin] = useState(false);

  const findEmptySpace = (grid) => {
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        if (grid[row][col] === 0) return [row, col];
      }
    }
  };

  const shufflePuzzle = () => {
    setIsWin(false);
    const prevPuzzle = JSON.parse(JSON.stringify(puzzle));
    let emptyPos = findEmptySpace(prevPuzzle);
    for (let index = 0; index < 1000; index++) {
      let randomMove = moves[Math.floor(Math.random() * moves.length)];
      let [row, col] = emptyPos;
      let [newRow, newCol] = [row + randomMove[0], col + randomMove[1]];
      if (newRow >= 0 && newRow < 4 && newCol >= 0 && newCol < 4) {
        prevPuzzle[row][col] = prevPuzzle[newRow][newCol];
        prevPuzzle[newRow][newCol] = 0;
        emptyPos = [newRow, newCol];
      }
    }
    setPuzzle(prevPuzzle);
  };

  const checkWin = () => {
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        if (puzzle[row][col] !== correctGrid[row][col]) {
          return;
        }
      }
    }
    setIsWin(true);
  };

  const moveTile = (clickedRow, clickedCol) => {
    setIsWin(false);
    const prevPuzzle = JSON.parse(JSON.stringify(puzzle));
    let emptyPos = findEmptySpace(prevPuzzle);

    if (
      Math.abs(clickedRow - emptyPos[0]) +
        Math.abs(clickedCol - emptyPos[1]) ===
      1
    ) {
      prevPuzzle[emptyPos[0]][emptyPos[1]] = prevPuzzle[clickedRow][clickedCol];
      prevPuzzle[clickedRow][clickedCol] = 0;
      setPuzzle(prevPuzzle);
    }
  };

  useEffect(
    () => {
      shufflePuzzle();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => checkWin(), [puzzle]);

  return (
    <div>
      <h2 className="text-3xl text-orange-200 my-8 mt-10 w-full text-center">
        {isWin ? "You Win!" : "15 Puzzle"}
      </h2>
      <div className="flex justify-center">
        {isWin && (
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
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-4 gap-1 bg-gray-600 shadow-inset p-2">
          {puzzle.map((row, rowIndex) =>
            row.map((cell, cellIndex) => (
              <div
                onClick={() => cell !== 0 && moveTile(rowIndex, cellIndex)}
                key={rowIndex * 4 + cellIndex}
                className={`text-center text-3xl  font-bold flex items-center justify-center w-24 h-24 rounded-lg cursor-pointer  ${
                  cell !== 0 && "bg-slate-400 shadow-inset hover:text-amber-100"
                } `}
              >
                {cell === 0 ? "" : cell}
              </div>
            ))
          )}
        </div>
      </div>
      <div className="flex justify-center mt-2">
        <button
          className="p-[14px] w-24 border rounded-lg hover:text-amber-500 hover:border-amber-500 m-4"
          onClick={shufflePuzzle}
        >
          {isWin ? "Restart" : "Shuffle"}
        </button>
        <button
          className="p-[14px] w-24 border rounded-lg hover:text-amber-500 hover:border-amber-500 m-4"
          onClick={() =>
            setPuzzle([
              [1, 2, 3, 4],
              [5, 6, 7, 8],
              [9, 10, 11, 12],
              [13, 0, 14, 15],
            ])
          }
        >
          Cheat
        </button>
      </div>
    </div>
  );
};
