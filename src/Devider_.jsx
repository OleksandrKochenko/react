import { Icon } from "@iconify/react/dist/iconify.js";

export const Devider = () => {
  return (
    <div className="w-full flex items-center justify-center py-3">
      <div className="w-1/4">
        <div className="border-b"></div>
        <div></div>
      </div>
      <div className="px-2 text-xl">
        <Icon icon={"uil:react"} />
      </div>
      <div className="w-1/4">
        <div className="border-b"></div>
        <div></div>
      </div>
    </div>
  );
};
