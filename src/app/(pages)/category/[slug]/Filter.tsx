import { useState } from "react";
import { DayPicker } from "react-day-picker";
import { vi } from "date-fns/locale";
import { FaFilter } from "react-icons/fa6";

const cityList = [
  {
    id: 1,
    name: "Hà Nội",
  },
  {
    id: 2,
    name: "Đà Nẵng",
  },
  {
    id: 3,
    name: "Hồ Chí Minh",
  },
];

const filterPrice = [
  {
    id: 1,
    label: "Dưới 5 triệu",
  },
  {
    id: 2,
    label: "Từ 5 - 10 triệu",
  },
  {
    id: 3,
    label: "Từ 10 - 20 triệu",
  },
  {
    id: 4,
    label: "Trên 20 triệu",
  },
];

export const Filter = ({
  filterActive,
  setFilterActive,
}: {
  filterActive: boolean;
  setFilterActive: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [date, setDate] = useState<Date | undefined>();

  return (
    <>
      <div
        className={`w-1/4 lg:block ${filterActive ? "fixed inset-0 z-[998] block h-full w-full" : "hidden"}`}
      >
        <div
          style={{ boxShadow: "0px 0px 4px 0px #00000040" }}
          className={`flex h-fit flex-col gap-[15px] rounded-[10px] bg-white p-[15px] ${filterActive ? "relative z-[1] h-full w-[280px] rounded-none" : "w-full"}`}
        >
          <div className="flex items-center justify-between">
            <div className="text-travel-primary text-lg font-semibold">
              Bộ Lọc
            </div>
            <button className="cursor-pointer">
              <FaFilter className="text-travel-primary text-[20px]" />
            </button>
          </div>
          <div className="flex flex-col gap-[5px]">
            <label
              htmlFor=""
              className="text-travel-gray-900 text-sm font-semibold"
            >
              Mức giá
            </label>
            <select className="select border-travel-gray-900 text-travel-gray-900 w-full rounded-sm border bg-white px-3 text-sm font-medium">
              <option value="" className="rounded-sm py-2">
                -- Chọn mức giá --
              </option>
              {filterPrice.map((price) => (
                <option key={price.id} className="rounded-sm py-2">
                  {price.label}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-[5px]">
            <label
              htmlFor=""
              className="text-travel-gray-900 text-sm font-semibold"
            >
              Điểm đi
            </label>
            <select className="select border-travel-gray-900 text-travel-gray-900 w-full rounded-sm border bg-white px-3 text-sm font-medium">
              <option className="rounded-sm py-2">-- Chọn điểm đi --</option>
              {cityList.map((city) => (
                <option key={city.id} className="rounded-sm py-2">
                  {city.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-[5px]">
            <label
              htmlFor=""
              className="text-travel-gray-900 text-sm font-semibold"
            >
              Điểm đến
            </label>
            <select className="select border-travel-gray-900 text-travel-gray-900 w-full rounded-sm border bg-white px-3 text-sm font-medium">
              <option className="rounded-sm py-2">-- Chọn điểm đến --</option>
              {cityList.map((city) => (
                <option key={city.id} className="rounded-sm py-2">
                  {city.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-[5px]">
            <label
              htmlFor=""
              className="text-travel-gray-900 text-sm font-semibold"
            >
              Ngày khởi hành
            </label>
            <div className="border-travel-gray-900 text-travel-gray-900 h-[38px] w-full rounded-sm border px-3 text-sm">
              <button
                type="button"
                popoverTarget="rdp-popover"
                className="text-travel-gray-900 h-full w-full text-left text-sm font-normal"
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

          <button className="bg-travel-primary h-[38px] cursor-pointer rounded-[5px] text-sm font-medium text-white hover:brightness-95">
            Áp Dụng
          </button>
          <button className="bg-travel-red h-[38px] cursor-pointer rounded-[5px] text-sm font-medium text-white hover:brightness-95">
            Xóa bộ lọc
          </button>
        </div>

        {/* Overlay */}
        <div
          onClick={() => setFilterActive(false)}
          className={`bg-travel-overlay fixed inset-0 h-full w-full ${filterActive ? "block" : "hidden"}`}
        ></div>
      </div>
    </>
  );
};
