"use client";
import { FaMagnifyingGlass, FaRegCalendar } from "react-icons/fa6";
import { LuCircleDollarSign } from "react-icons/lu";
import { GrMapLocation } from "react-icons/gr";
import { DayPicker } from "react-day-picker";
import { useState } from "react";
import { vi } from "date-fns/locale";

export const FormSearch = () => {
  const [date, setDate] = useState<Date | undefined>();
  const [price, setPrice] = useState("Chọn mức giá");

  const options = [
    "Dưới 5 triệu",
    "Từ 5 - 10 triệu",
    "Từ 10 - 20 triệu",
    "Trên 20 triệu",
  ];

  return (
    <form
      action=""
      className="flex flex-wrap gap-3 rounded-md bg-[#00000066] p-4 md:gap-4 md:p-6 lg:gap-5 lg:p-10"
    >
      {/* Location */}
      <div className="flex h-[58px] w-full items-center gap-3 rounded-md bg-white px-3 py-2">
        <GrMapLocation className="text-travel-primary size-5" />
        <div className="flex flex-1 flex-col">
          <p className="text-travel-secondary pb-0.5 text-sm font-medium">
            Bạn muốn đi đâu?
          </p>
          <input
            type="text"
            placeholder="ví dụ: Đã Nẵng, Phú Quốc, Nhật Bản, Hàn Quốc, Mỹ"
            className="placeholder:text-travel-gray-100 text-sm font-normal"
          />
        </div>
      </div>

      {/* Time */}
      <div className="flex h-[58px] w-full items-center gap-3 rounded-md bg-white px-3 py-2 md:w-[37.5%]">
        <FaRegCalendar className="text-travel-primary size-5" />
        <div className="flex flex-1 flex-col">
          <p className="text-travel-secondary text-sm font-medium">
            Ngày khởi hành
          </p>
          <div className="relative w-full">
            <button
              type="button"
              popoverTarget="rdp-popover"
              className="text-travel-secondary w-full text-left text-sm font-normal"
              style={{ anchorName: "--rdp" } as React.CSSProperties}
            >
              {date
                ? date.toLocaleDateString()
                : new Date().toLocaleDateString()}
            </button>
            <div
              popover="auto"
              id="rdp-popover"
              className="dropdown"
              style={{ positionAnchor: "--rdp" } as React.CSSProperties}
            >
              <DayPicker
                className="react-day-picker"
                mode="single"
                selected={date}
                onSelect={setDate}
                locale={vi}
                disabled={{ before: new Date() }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Price */}
      <div className="flex h-[58px] w-full items-center gap-3 rounded-md bg-white px-3 py-2 md:w-[37.5%]">
        <LuCircleDollarSign className="text-travel-primary size-5" />
        <div className="flex flex-1 flex-col">
          <p className="text-travel-secondary pb-0.5 text-sm font-medium">
            Ngân sách
          </p>
          <select
            className="select h-auto w-full border-none bg-none p-0 text-sm shadow-none [&>option::checkmark]:hidden"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          >
            <option disabled className="mb-2 p-0">
              Chọn mức giá
            </option>
            {options.map((item) => (
              <option
                key={item}
                value={item}
                className={`border-travel-gray-100 mb-2 border last:mb-0 ${price === item ? "bg-travel-primary text-white" : "hover:border-travel-primary hover:bg-transparent"}`}
              >
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        type="submit"
        style={{ boxShadow: "0px 3.3px 3.3px 0px #00000040" }}
        className="bg-travel-primary flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-md px-4 py-[19px] text-white transition-all duration-300 hover:brightness-95"
      >
        <FaMagnifyingGlass className="text-xl" />
        <span className="text-[13px] font-semibold">Tìm Kiếm</span>
      </button>
    </form>
  );
};
