import { useEffect, useState } from "react";

export const BracketsValidator = () => {
  const [input, setInput] = useState("");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const isValidBrackets = (str) => {
      const stack = [];
      const openBrackets = ["(", "{", "["];
      const closeBrackets = [")", "}", "]"];
      const bracketMap = {
        "(": ")",
        "{": "}",
        "[": "]",
      };

      for (let i = 0; i < str.length; i++) {
        if (openBrackets.includes(str[i])) {
          stack.push(str[i]);
        } else if (closeBrackets.includes(str[i])) {
          const lastBracket = stack.pop();
          if (str[i] !== bracketMap[lastBracket]) {
            return false;
          }
        }
      }

      return stack.length === 0;
    };

    setIsValid(isValidBrackets(input));
  }, [input]);

  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="text-3xl text-orange-200 my-8 mt-10 w-full text-center">
        Brackets Validator
      </h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="p-2 border rounded-lg m-4 bg-transparent text-white"
        placeholder="Enter brackets"
      />
      <p className={`text-lg ${isValid ? "text-amber-500" : "text-red-400"}`}>
        {isValid ? "Valid brackets" : "Invalid brackets"}
      </p>
    </div>
  );
};
