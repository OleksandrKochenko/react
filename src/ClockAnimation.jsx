import { useEffect, useState } from "react";
import { Dots, getCurrentTime } from "./DigitalClock";

export const ClockAnimation = () => {
  const [time, setTime] = useState([0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const [hour1, hour2, min1, min2, sec1, sec2] = [0, 1, 2, 3, 4, 5, 6];

  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="text-3xl text-orange-200 my-8 mt-10 w-full text-center">
        Digital Clock with animation
      </h2>
      <div className="h-[48px] overflow-hidden p-0 m-2">
        <div className="flex p-0 m-0">
          {time.map((el, idx) => (
            <div key={idx} className="flex text-amber-500">
              <span
                className={`text-[60px]/[30px] font-mono font-bold 
                    ${idx === sec2 && "animate-shift-up"}
                    ${idx === sec1 && time[sec2] === 9 && "animate-shift-up"}
                    ${
                      idx === min2 &&
                      time[sec1] === 5 &&
                      time[sec2] === 9 &&
                      "animate-shift-up-once"
                    }
                    ${
                      idx === min1 &&
                      time[min2] === 9 &&
                      time[sec1] === 5 &&
                      time[sec2] === 9 &&
                      "animate-shift-up-once"
                    }`}
              >
                {el}
              </span>
              {idx % 2 !== 0 && idx !== time.length - 1 && <Dots />}
            </div>
          ))}
        </div>
        <div className="flex">
          {time.map((el, idx) => (
            <div key={idx} className="flex text-amber-500 my-2">
              <span
                className={`text-[60px]/[30px] font-mono font-bold 
                    ${idx === sec2 && "animate-shift-up"}
                    ${idx === sec1 && time[sec2] === 9 && "animate-shift-up"}
                    ${
                      idx === min2 &&
                      time[sec1] === 5 &&
                      time[sec2] === 9 &&
                      "animate-shift-up-once"
                    }
                    ${
                      idx === min1 &&
                      time[min2] === 9 &&
                      time[sec1] === 5 &&
                      time[sec2] === 9 &&
                      "animate-shift-up-once"
                    }`}
              >
                {el === 9 ? 0 : el + 1}
              </span>
              {idx % 2 !== 0 && idx !== time.length - 1 && <Dots />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
