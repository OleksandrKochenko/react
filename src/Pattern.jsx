import { useState } from "react";
import { patternField, patterns } from "./data";
import SvgGenerator from "./SvgGenerator";
import CustomDropdown from "./CustomDropdown";

export const Pattern = () => {
  const fieldString = JSON.stringify(patterns[0]);

  const [fieldArray, setFieldArray] = useState(JSON.parse(fieldString));
  const [showPattern, setShowPattern] = useState(false);
  const [mouseClicked, setMouseClicked] = useState([]);

  const rowsKeys = fieldArray.map((row) => {
    const keys = [];
    let keySum = 0;
    row.forEach((el, idx) => {
      if (el > 0) {
        keySum++;
        if (keySum && idx === row.length - 1) keys.push(keySum);
      } else {
        if (keySum) keys.push(keySum);
        keySum = 0;
      }
    });
    return keys;
  });

  const columnsKeys = [];
  for (let col = 0; col < fieldArray[0].length; col++) {
    let sum = 0;
    const colSum = [];
    for (let row = 0; row < fieldArray.length; row++) {
      if (fieldArray[row][col] > 0) {
        sum++;
        if (sum && row === fieldArray.length - 1) colSum.push(sum);
      } else {
        if (sum > 0) {
          colSum.push(sum);
          sum = 0;
        }
      }
    }
    columnsKeys.push([...colSum]);
  }

  const changeColor = (rowNr, colNr) => {
    const arr = JSON.parse(JSON.stringify(fieldArray));
    arr[rowNr][colNr] === 0 ? (arr[rowNr][colNr] = 1) : (arr[rowNr][colNr] = 0);
    setFieldArray(arr);
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl text-orange-200 my-8">Pattern Maker</h2>
      <div>
        {fieldArray.map((row, rowNr) => (
          <div key={rowNr + "rr"} className="flex">
            <div id={`row-${rowNr}`} key={rowNr} className="flex">
              {row.map((cell, colNr) => (
                <div
                  id={`cell-${rowNr.toString() + "-" + colNr.toString()}`}
                  key={"r-" + rowNr.toString() + "c-" + colNr.toString()}
                  className={`w-5 h-5 border ${cell === 1 && "bg-white"}`}
                  onMouseEnter={() =>
                    (mouseClicked.includes(rowNr) ||
                      mouseClicked.includes(colNr)) &&
                    changeColor(rowNr, colNr)
                  }
                  onMouseDown={() => {
                    changeColor(rowNr, colNr);
                    setMouseClicked([rowNr, colNr]);
                  }}
                  onMouseUp={() => setMouseClicked([])}
                ></div>
              ))}
            </div>
            {rowsKeys[rowNr].length === 0 ? (
              <div className="text-[12px] flex justify-center items-center w-5 h-5 border border-slate-500">
                0
              </div>
            ) : (
              rowsKeys[rowNr].map((el, idx) => (
                <div
                  key={idx}
                  className="text-[12px] flex justify-center items-center w-5 h-5 border border-slate-500"
                >
                  {el}
                </div>
              ))
            )}
          </div>
        ))}
        <div className="flex">
          {columnsKeys.map((col, colNr) => (
            <div key={colNr} className="flex flex-col">
              {col.length === 0 ? (
                <div className="text-[12px] flex justify-center items-center w-5 h-5 border border-slate-500">
                  0
                </div>
              ) : (
                col.map((el, idx) => (
                  <div
                    key={idx}
                    className="text-[12px] flex justify-center items-center w-5 h-5 border border-slate-500"
                  >
                    {el}
                  </div>
                ))
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex mt-6 mb-2">
        <CustomDropdown options={patterns} onChange={setFieldArray} />
        <button
          onClick={() => {
            window.localStorage.setItem("pattern", JSON.stringify(fieldArray));
            setShowPattern(true);
          }}
          className="w-24 border rounded-lg px-4 hover:text-amber-500 hover:border-amber-500 mx-1"
        >
          Save
        </button>
        <div className="flex">
          <button
            className="w-24 border rounded-lg px-4 hover:text-amber-500 hover:border-amber-500 mx-1"
            onClick={() => {
              const fieldString = JSON.stringify(patternField);
              setFieldArray(JSON.parse(fieldString));
              setShowPattern(false);
            }}
          >
            Clear
          </button>
        </div>
      </div>
      {showPattern && <SvgGenerator data={fieldArray} />}
    </div>
  );
};
