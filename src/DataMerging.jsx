import { useState } from "react";
import { usersData } from "./data";

export const DataMerging = () => {
  const [mergedData, setMergedData] = useState([]);

  const mergeData = () => {
    const merged = [];
    const usersDataLength = usersData.length;
    for (let i = 0; i < usersDataLength; i++) {
      const user = { ...usersData[i] };
      const mergedUser = merged.find((el) => el.user === user.user);
      if (mergedUser) {
        mergedUser.duration = mergedUser.duration + user.duration;
        mergedUser.equipment = [
          ...new Set([...mergedUser.equipment, ...user.equipment]),
        ];
      } else {
        merged.push(user);
      }
    }
    setMergedData(merged);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="text-3xl text-orange-200 my-8 mt-10 w-full text-center">
        Data Merging
      </h2>
      <div className="w-3/4 flex text-base justify-center items-start">
        <p className="text-white mr-2 flex flex-col">
          {usersData.map((el, idx) => (
            <span key={idx}>{JSON.stringify(el, null, 2)}</span>
          ))}
        </p>
        {mergedData.length && (
          <p className="text-white flex flex-col">
            {mergedData.map((el, idx) => (
              <span key={idx}>{JSON.stringify(el, null, 2)}</span>
            ))}
          </p>
        )}
      </div>
      {!mergedData.length && (
        <button
          onClick={() => mergeData()}
          className="p-[14px] w-24 border rounded-lg hover:text-amber-500 hover:border-amber-500 m-4"
        >
          Merge
        </button>
      )}
    </div>
  );
};
