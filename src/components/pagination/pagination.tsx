import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";

export const Pagination = () => {
  return (
    <div className="flex items-center justify-end">
      <div className="border-travel-primary flex h-10 w-10 cursor-pointer items-center justify-center rounded-tl-[5px] rounded-bl-[5px] border border-r-0">
        <FaAnglesLeft className="text-travel-primary text-xs" />
      </div>
      <div className="border-travel-primary text-travel-primary flex h-10 w-10 cursor-pointer items-center justify-center border border-r-0 text-sm">
        1
      </div>
      <div className="border-travel-primary text-travel-primary flex h-10 w-10 cursor-pointer items-center justify-center border border-r-0 text-sm">
        2
      </div>
      <div className="border-travel-primary text-travel-primary flex h-10 w-10 cursor-pointer items-center justify-center border border-r-0 text-sm">
        3
      </div>
      <div className="border-travel-primary text-travel-primary flex h-10 w-10 cursor-pointer items-center justify-center border border-r-0 text-sm">
        4
      </div>
      <div className="border-travel-primary flex h-10 w-10 cursor-pointer items-center justify-center rounded-tr-[5px] rounded-br-[5px] border">
        <FaAnglesRight className="text-travel-primary text-xs" />
      </div>
    </div>
  );
};
