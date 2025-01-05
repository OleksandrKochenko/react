import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { transferibleList } from "./data";

export const TransferList = () => {
  const [transferList, setTransferList] = useState(
    JSON.parse(JSON.stringify(transferibleList))
  );

  const isToLeftDisabled =
    transferList.filter(
      (item) => item.position === "right" && item.transferible
    ).length === 0;

  const isToRightDisabled =
    transferList.filter((item) => item.position === "left" && item.transferible)
      .length === 0;

  const transferAllToLeft = () => {
    const updatedList = transferList.map((item) => {
      if (item.position === "right") {
        item.position = "left";
      }
      return item;
    });
    setTransferList(updatedList);
  };

  const transferAllToRight = () => {
    const updatedList = transferList.map((item) => {
      if (item.position === "left") {
        item.position = "right";
      }
      return item;
    });
    setTransferList(updatedList);
  };

  const transferToLeft = () => {
    const updatedList = transferList.map((item) => {
      if (item.position === "right" && item.transferible) {
        item.position = "left";
      }
      return item;
    });
    setTransferList(updatedList);
  };

  const transferToRight = () => {
    const updatedList = transferList.map((item) => {
      if (item.position === "left" && item.transferible) {
        item.position = "right";
      }
      return item;
    });
    setTransferList(updatedList);
  };

  const togleTransferible = (id) => {
    const updatedList = transferList.map((item) => {
      if (item.id === id) {
        item.transferible = !item.transferible;
      }
      return item;
    });
    setTransferList(updatedList);
  };

  return (
    <div>
      <h2 className="text-3xl text-orange-200 my-8 mt-10 w-full text-center">
        Transfer List
      </h2>
      <div className="flex justify-center">
        <div className="p-4 text-xl w-48">
          {transferList.map(
            (item) =>
              item.position === "left" && (
                <div key={item.id} className="flex items-center ">
                  <span
                    className="cursor-pointer hover:text-amber-500"
                    onClick={() => togleTransferible(item.id)}
                  >
                    <Icon
                      icon={
                        item.transferible
                          ? "ri:checkbox-fill"
                          : "ri:checkbox-blank-line"
                      }
                    />
                  </span>
                  <span>{item.name}</span>
                </div>
              )
          )}
        </div>
        <div className="flex flex-col items-center border-l border-r px-10 ">
          <button
            className="p-[14px] border rounded-lg hover:text-amber-500 hover:border-amber-500 m-4"
            onClick={transferAllToRight}
          >
            <Icon icon={"mynaui:chevron-double-right"} className="text-xl" />
          </button>
          <button
            className={`p-4 border ${
              isToRightDisabled &&
              "border-gray-500 text-gray-500 hover:text-gray-500 hover:border-gray-500"
            } rounded-lg ${
              !isToRightDisabled &&
              "hover:text-amber-500 hover:border-amber-500"
            }  m-4`}
            onClick={transferToRight}
            disabled={isToRightDisabled}
          >
            <Icon icon={"akar-icons:chevron-right"} />
          </button>
          <button
            className={`p-4 border ${
              isToLeftDisabled &&
              "border-gray-500 text-gray-500 hover:text-gray-500 hover:border-gray-500"
            } rounded-lg ${
              !isToLeftDisabled && "hover:text-amber-500 hover:border-amber-500"
            }  m-4`}
            onClick={transferToLeft}
            disabled={isToLeftDisabled}
          >
            <Icon icon={"akar-icons:chevron-left"} />
          </button>
          <button
            className="p-[14px] border rounded-lg hover:text-amber-500 hover:border-amber-500 m-4"
            onClick={transferAllToLeft}
          >
            <Icon icon={"mynaui:chevron-double-left"} className="text-xl" />
          </button>
        </div>
        <div className="p-4 text-xl w-48">
          {transferList.map(
            (item) =>
              item.position === "right" && (
                <div key={item.id} className="flex items-center ">
                  <span
                    className="cursor-pointer hover:text-amber-500"
                    onClick={() => togleTransferible(item.id)}
                  >
                    <Icon
                      icon={
                        item.transferible
                          ? "ri:checkbox-fill"
                          : "ri:checkbox-blank-line"
                      }
                    />
                  </span>
                  <span>{item.name}</span>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};
