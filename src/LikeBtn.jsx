import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import axios from "axios";

const BASE_URL = "https://www.greatfrontend.com/api/questions/like-button";

export const LikeBtn = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const fetchLike = async (status) => {
    setErrorMsg("");
    setIsloading(true);
    try {
      const { data } = await axios.post(BASE_URL, { action: status });
      console.log(data.message);
      setIsLiked((prevState) => !prevState);
      setIsloading(false);
    } catch (error) {
      setErrorMsg(error.response.data.message);
      setIsloading(false);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl text-orange-200 my-8">Like Button</h2>
      <p className="my-4">
        The request is made to the back end API which has a 50% chance to
        succeeding / failing (error message shall appear)
      </p>
      <button
        onClick={() => fetchLike(!isLiked ? "like" : "unlike")}
        className={`flex items-center rounded-lg border px-4 text-xl ${
          isLiked
            ? "hover:text-white hover:border-white hover:bg-amber-400"
            : "hover:text-amber-400 hover:border-amber-400 hover:bg-transparent"
        }    ${isLiked && "bg-amber-400 border-amber-400 text-white"}`}
      >
        <Icon
          icon={
            isLoading ? "line-md:loading-twotone-loop" : "mdi:heart-outline"
          }
          className={`text-2xl`}
        />{" "}
        <span>{isLiked ? "Unlike" : "Like"}</span>
      </button>
      {errorMsg && <p className="py-2 text-red-400">{errorMsg}</p>}
    </div>
  );
};
