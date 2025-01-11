import { useEffect, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

export const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [startProgress, setStartProgress] = useState(false);

  useEffect(() => {
    if (startProgress) {
      const interval = setInterval(() => {
        setProgress((prevProgress) => prevProgress < 100 && prevProgress + 1);
      }, 50);

      return () => clearInterval(interval);
    }
  }, [startProgress]);

  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="text-3xl text-orange-200 my-8 mt-10 w-full text-center">
        Progress Bar
      </h2>
      <div className="flex">
        <button
          onClick={() => setStartProgress((prev) => !prev)}
          className="p-[14px] w-24 border rounded-lg hover:text-amber-500 hover:border-amber-500 m-4"
        >
          {startProgress ? "Stop" : "Start"}
        </button>
        <button
          onClick={() => setProgress(0)}
          className="p-[14px] w-24 border rounded-lg hover:text-amber-500 hover:border-amber-500 m-4"
        >
          Reset
        </button>
      </div>
      <div className="w-1/2 bg-gray-500 h-8 rounded-full relative ">
        {progress > 5 && (
          <div
            className="absolute left-0 h-8 bg-amber-500 rounded-full flex items-center text-white p-0 m-0 shadow-inset"
            style={{ width: `${progress}%` }}
          >
            <span className="p-0 pl-1 m-0">{progress + "%"}</span>
            {progress > 13 && (
              <span className="flex-grow flex justify-end ">
                <Icon
                  icon={"mynaui:wheel"}
                  className={`text-3xl ${startProgress ? "animate-spin" : ""}`}
                />
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
