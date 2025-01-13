import { useEffect, useState } from "react";

export const PalindromValidator = () => {
  const [input, setInput] = useState("");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const isValidPalindrome = (str) => {
      const cleanStr = str.replace(/\W/g, "").toLowerCase();
      const reversedStr = cleanStr.split("").reverse().join("");
      return cleanStr === reversedStr;
    };

    setIsValid(isValidPalindrome(input));
  }, [input]);

  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="text-3xl text-orange-200 my-8 mt-10 w-full text-center">
        Palindrome Validator
      </h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="p-2 border rounded-lg m-4 bg-transparent text-white"
        placeholder="Enter a string"
      />
      <p className={`text-lg ${isValid ? "text-amber-500" : "text-red-400"}`}>
        {isValid ? "Valid palindrome" : "Invalid palindrome"}
      </p>
    </div>
  );
};
