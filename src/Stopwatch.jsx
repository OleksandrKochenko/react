import { useState } from "react";

export const Stopwatch = () => {
  const [time, setTime] = useState(35000000);
  const [isRunning, setIsRunning] = useState(false);
  const [timerId, setTimerId] = useState(null);

  const start = () => {
    setIsRunning(true);
    setTimerId(setInterval(() => setTime((time) => time + 100), 10));
  };

  const stop = () => {
    setIsRunning(false);
    clearInterval(timerId);
  };

  const reset = () => {
    setTime(0);
    setIsRunning(false);
    clearInterval(timerId);
  };

  const second = 10000;
  const minute = 60 * second;
  const hour = 60 * minute;
  const hours = Math.floor(time / hour);
  const minutes = Math.floor((time % hour) / minute);
  const seconds = Math.floor((time % minute) / second);
  const deciseconds = Math.floor((time % second) / 1000);

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl text-orange-200 my-8 mt-10">Stop Watch</h2>
      <div>
        <span className="text-3xl text-amber-400">
          {hours < 10 ? "0" + hours : hours}
        </span>
        <span className="text-3xl text-amber-400">:</span>
        <span className="text-3xl text-amber-400">
          {minutes < 10 ? "0" + minutes : minutes}
        </span>
        <span className="text-3xl text-amber-400">:</span>
        <span className="text-3xl text-amber-400">
          {seconds < 10 ? "0" + seconds : seconds}
        </span>
        <span className="text-3xl text-amber-400">:</span>
        <span className="text-3xl text-amber-400">{deciseconds}</span>
      </div>
      <div className="flex">
        <button
          onClick={isRunning ? stop : start}
          className="w-24 border rounded-lg p-4 hover:text-amber-500 hover:border-amber-500 mx-2 mt-6"
        >
          {isRunning ? "Stop" : "Start"}
        </button>
        <button
          onClick={reset}
          className="w-24 border rounded-lg p-4 hover:text-amber-500 hover:border-amber-500 mx-2 mt-6"
        >
          Reset
        </button>
      </div>
    </div>
  );
};
