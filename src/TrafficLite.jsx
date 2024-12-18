import { useEffect, useState } from "react";

export const TrafficLite = () => {
  const [light, setLight] = useState("");

  useEffect(() => {
    let redTimeOut;
    let yellowTimeOut;
    let greenTimeOut;

    const interval = setInterval(() => {
      setLight("red");
      redTimeOut = setTimeout(() => {
        setLight("yellow");
      }, 5000);
      yellowTimeOut = setTimeout(() => {
        setLight("green");
      }, 6500);
      greenTimeOut = setTimeout(() => {
        setLight("yellow");
      }, 10500);
    }, 12000);
    return () => {
      clearTimeout(redTimeOut);
      clearTimeout(yellowTimeOut);
      clearTimeout(greenTimeOut);
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h2 className="text-3xl text-orange-200 my-8 mt-10">Traffic Lights</h2>
      <div className="mx-auto flex flex-col items-center justify-between h-[300px] w-fit rounded-md border-4 bg-slate-400 border-gray-900 p-4">
        <div
          className={`h-[80px] w-[80px] rounded-full border-t-gray-900 ${
            light === "red" ? "bg-red-600" : "bg-slate-700"
          } border-t-[10px]`}
        ></div>
        <div
          className={`h-[80px] w-[80px] rounded-full border-t-gray-900 ${
            light === "yellow" ? "bg-yellow-500" : "bg-slate-700"
          } border-t-[10px]`}
        ></div>
        <div
          className={`h-[80px] w-[80px] rounded-full border-t-gray-900 ${
            light === "green" ? "bg-green-700" : "bg-slate-700"
          } border-t-[10px]`}
        ></div>
      </div>
    </div>
  );
};
