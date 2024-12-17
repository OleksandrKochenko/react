import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { stars } from "./data";

export const Stars = () => {
  const [rating, setRating] = useState(0);
  const [ratingHover, setRatingHover] = useState(0);

  return (
    <div className="my-8">
      <h2 className="text-3xl text-orange-200">Rating Stars</h2>
      <ul className="my-4 flex">
        {stars.map((el) => (
          <li
            key={el.id}
            className="text-3xl text-amber-400 cursor-pointer"
            onMouseEnter={() => setRatingHover(el.id)}
            onMouseLeave={() => setRatingHover(0)}
            onClick={() =>
              rating === el.id ? setRating(el.id - 1) : setRating(el.id)
            }
          >
            <Icon
              icon={
                ratingHover
                  ? ratingHover >= el.id
                    ? el.filled
                    : el.outlined
                  : rating >= el.id
                  ? el.filled
                  : el.outlined
              }
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
