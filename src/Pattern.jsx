import { useState } from "react";
import { ambroidery, patternField } from "./data";
import SvgGenerator from "./SvgGenerator";

export const Pattern = () => {
  const fieldString = JSON.stringify(ambroidery);

  const [fieldArray, setFieldArray] = useState(JSON.parse(fieldString));
  const [showPattern, setShowPattern] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl text-orange-200 my-8">Pattern Maker</h2>
      <div>
        {fieldArray.map((row, rowNr) => (
          <div key={rowNr + "rr"} className="flex">
            <div id={`row-${rowNr}`} key={rowNr} className="flex w-full">
              {row.map((cell, colNr) => (
                <div
                  id={`cell-${rowNr.toString() + "-" + colNr.toString()}`}
                  key={"r-" + rowNr.toString() + "c-" + colNr.toString()}
                  className={`w-4 h-4 border ${cell === 1 && "bg-white"}`}
                  onClick={() => {
                    setFieldArray((prevState) => {
                      const arr = [...prevState];
                      arr[rowNr][colNr] === 0
                        ? (arr[rowNr][colNr] = 1)
                        : (arr[rowNr][colNr] = 0);
                      return arr;
                    });
                  }}
                ></div>
              ))}
            </div>
            <div className="text-[10px] px-1">
              {row.reduce((acc, curr) => acc + curr, 0)}
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          window.localStorage.setItem("pattern", JSON.stringify(fieldArray));
          setShowPattern(true);
        }}
        className="hover:text-amber-500 my-2"
      >
        Save to local storage
      </button>
      <div className="flex">
        <button
          className="border rounded-lg px-4 hover:text-amber-500 hover:border-amber-500"
          onClick={() => {
            const fieldString = JSON.stringify(patternField);
            setFieldArray(JSON.parse(fieldString));
            setShowPattern(false);
          }}
        >
          Clear
        </button>
      </div>

      {showPattern && <SvgGenerator />}
    </div>
  );
};
