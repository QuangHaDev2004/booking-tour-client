/* eslint-disable @next/next/no-img-element */
import { FaChevronDown, FaMagnifyingGlass } from "react-icons/fa6";

export const FormSearch = () => {
  return (
    <form
      action=""
      className="flex flex-wrap gap-3 rounded-[10px] bg-[#00000066] p-4 md:gap-4 md:p-6 lg:gap-[22px] lg:p-10"
    >
      {/* Địa điểm */}
      <div className="flex h-[58px] w-full items-center gap-[14px] rounded-[10px] bg-white px-3">
        <img
          src="/assets/images/icon-address.svg"
          alt="Địa điểm"
          className="h-5 w-auto"
        />
        <input
          type="text"
          placeholder="Bạn muốn đi đâu?"
          className="placeholder:text-travel-gray h-full flex-1 text-sm font-normal"
        />
        <FaChevronDown className="text-travel-primary text-xs" />
      </div>

      {/* Số lượng */}
      <div className="flex h-[58px] w-full items-center gap-[14px] rounded-[10px] bg-white px-3 md:w-[37.5%]">
        <img
          src="/assets/images/icon-user.svg"
          alt="Số lượng"
          className="h-5 w-auto"
        />
        <input
          type="text"
          placeholder="Số lượng"
          className="placeholder:text-travel-gray h-full flex-1 text-sm font-normal"
        />
        <FaChevronDown className="text-travel-primary text-xs" />
      </div>

      {/* Thời gian */}
      <div className="flex h-[58px] w-full items-center gap-[14px] rounded-[10px] bg-white px-3 md:w-[37.5%]">
        <img
          src="/assets/images/icon-calendar.svg"
          alt="Thời gian"
          className="h-5 w-auto"
        />
        <input
          type="date"
          placeholder="Ngày khởi hành"
          className="placeholder:text-travel-gray h-full flex-1 text-sm font-normal"
        />
      </div>

      <button
        type="submit"
        style={{ boxShadow: "0px 3.3px 3.3px 0px #00000040" }}
        className="bg-travel-primary flex flex-1 cursor-pointer items-center justify-center gap-[10px] rounded-[10px] px-4 py-[19px] text-white transition-all duration-300 hover:brightness-95"
      >
        <FaMagnifyingGlass className="text-xl" />
        <span className="text-[13px] font-semibold">Tìm Kiếm</span>
      </button>
    </form>
  );
};
