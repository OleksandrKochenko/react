import React, { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import SvgGenerator from "./SvgGenerator";

const CustomDropdown = ({ options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false); // close dropdown after selection
  };

  return (
    <div className="relative w-44 mr-1">
      <button
        onClick={toggleDropdown}
        className="w-full p-2 text-left bg-transparent border rounded-lg hover:text-amber-500 hover:border-amber-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50"
      >
        <div className="flex items-center justify-between">
          {selectedOption ? (
            <SvgGenerator data={selectedOption} />
          ) : (
            <span>Select a pattern</span>
          )}
          <Icon
            icon={isOpen ? "akar-icons:chevron-up" : "akar-icons:chevron-down"}
            className="w-5 h-5"
          />
        </div>
      </button>

      {isOpen && (
        <div className="absolute left-0 right-0 mt-1 bg-[darkslategray] border border-amber-500 rounded-lg shadow-lg max-h-48 overflow-auto z-10">
          {options.map((option, idx) => (
            <div
              key={idx}
              className="flex items-center p-3 cursor-pointer hover:bg-amber-500 hover:text-darkslategray"
              onClick={() => {
                handleSelect(option);
                onChange(option);
              }}
            >
              <SvgGenerator data={option} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
