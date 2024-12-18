import { useEffect, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { digitalChars } from "./data";

const Character = ({ chars }) => {
  return (
    <div className="relative w-[62px] h-[103px] border border-transparent text-slate-600 ">
      {/* e */}
      <Icon
        className={`text-xl scale-y-[2] absolute top-5 left-0 ${
          chars.includes("e") && "text-white"
        }`}
        icon={"mynaui:hexagon-solid"}
      />
      {/* f */}
      <Icon
        className={`text-xl scale-x-[2] absolute top-0 left-5 ${
          chars.includes("f") && "text-white"
        }`}
        icon={"material-symbols:hexagon-rounded"}
      />
      {/* a */}
      <Icon
        className={`text-xl scale-y-[2] absolute top-5 right-0 ${
          chars.includes("a") && "text-white"
        }`}
        icon={"mynaui:hexagon-solid"}
      />
      {/* g */}
      <Icon
        className={`text-xl scale-x-[2] absolute top-[40.5px] left-5 ${
          chars.includes("g") && "text-white"
        }`}
        icon={"material-symbols:hexagon-rounded"}
      />
      {/* d */}
      <Icon
        className={`text-xl scale-y-[2] absolute bottom-5 left-0 ${
          chars.includes("d") && "text-white"
        }`}
        icon={"mynaui:hexagon-solid"}
      />
      {/* c */}
      <Icon
        className={`text-xl scale-x-[2] absolute bottom-0 left-5 ${
          chars.includes("c") && "text-white"
        }`}
        icon={"material-symbols:hexagon-rounded"}
      />
      {/* b */}
      <Icon
        className={`text-xl scale-y-[2] absolute bottom-5 right-0 ${
          chars.includes("b") && "text-white"
        }`}
        icon={"mynaui:hexagon-solid"}
      />
    </div>
  );
};

const Dots = () => {
  return (
    <div className="mx-2">
      <div className={`w-4 h-4 rounded-full mb-2 bg-white`}></div>
      <div className={`w-4 h-4 rounded-full bg-white`}></div>
    </div>
  );
};

export const DigitalClock = () => {
  const [time, setTime] = useState([0, 0, 0, 0, 0, 0]);

  const getCurrentTime = () => {
    let time = "";
    const timeData = new Date();
    const hours = timeData.getHours();
    time = time + (hours < 10 ? "0" + hours : hours.toString());
    const minutes = timeData.getMinutes();
    time = time + (minutes < 10 ? "0" + minutes : minutes.toString());
    const seconds = timeData.getSeconds();
    time = time + (seconds < 10 ? "0" + seconds : seconds.toString());
    return time.split("").map(Number);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl text-orange-200 my-8">7-Segment Digital Clock</h2>
      <div className="flex items-center">
        <Character
          chars={digitalChars.find((el) => el.number === time[0]).characters}
        />
        <Character
          chars={digitalChars.find((el) => el.number === time[1]).characters}
        />
        <Dots />
        <Character
          chars={digitalChars.find((el) => el.number === time[2]).characters}
        />
        <Character
          chars={digitalChars.find((el) => el.number === time[3]).characters}
        />
        <Dots />
        <Character
          chars={digitalChars.find((el) => el.number === time[4]).characters}
        />
        <Character
          chars={digitalChars.find((el) => el.number === time[5]).characters}
        />
      </div>
    </div>
  );
};
