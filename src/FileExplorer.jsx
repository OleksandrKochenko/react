import { Icon } from "@iconify/react/dist/iconify.js";
import { fileExplorer } from "./data";
import { useState } from "react";

const compareNames = (a, b) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
};

const compareType = (a, b) => {
  if (a.children && !b.children) return -1;
  if (b.children && !a.children) return 1;
  return 0;
};

const File = ({ item }) => {
  return (
    <li key={item.id} className="flex pl-[27px]">
      <p>{item.name}</p>
    </li>
  );
};

const Folder = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <li key={item.id} className="my-2">
      <div
        className="flex hover:text-amber-400 cursor-pointer"
        onClick={() => setIsExpanded((prevState) => !prevState)}
      >
        <span>
          <Icon
            icon={isExpanded ? "tabler:chevron-down" : "tabler:chevron-right"}
          />
        </span>
        <p>{item.name}</p>
      </div>
      {isExpanded && (
        <ul className="ml-3 pl-[13px] border-l-[0.3px] border-gray-500">
          {item.children
            .sort(compareNames)
            .sort(compareType)
            .map((el) =>
              el.children ? <Folder item={el} /> : <File item={el} />
            )}
        </ul>
      )}
    </li>
  );
};

export const FileExplorer = () => {
  return (
    <div className="my-8">
      <h2 className="text-3xl text-orange-200">File Explorer</h2>
      <ul className="my-4">
        {fileExplorer
          .sort(compareNames)
          .sort(compareType)
          .map((el) =>
            el.children ? <Folder item={el} /> : <File item={el} />
          )}
      </ul>
    </div>
  );
};
