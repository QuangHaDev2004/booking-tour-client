/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { FaMagnifyingGlass, FaRegCalendar } from "react-icons/fa6";
import { LuCircleDollarSign } from "react-icons/lu";
import { GrMapLocation } from "react-icons/gr";
import { useState } from "react";
import { filterPrice } from "@/constants/filter";
import { useRouter } from "next/navigation";

export const FormSearch = () => {
  const router = useRouter();

  const initialSearch = {
    keyword: "",
    departureDate: "",
    price: "",
  };

  const [search, setSearch] = useState(initialSearch);

  const handleUpdateSearch = (key: string, value: string) => {
    setSearch((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmitSearch = (e: any) => {
    e.preventDefault();

    const params = new URLSearchParams();
    Object.entries(search).forEach(([key, value]) => {
      if (value) params.set(key, value);
    });

    router.push(`/search?${params.toString()}`, { scroll: false });
  };

  return (
    <form
      onSubmit={handleSubmitSearch}
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
            onChange={(e) => handleUpdateSearch("keyword", e.target.value)}
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
          <input
            type="date"
            className="text-sm"
            onChange={(e) =>
              handleUpdateSearch("departureDate", e.target.value)
            }
          />
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
            value={search.price}
            onChange={(e) => handleUpdateSearch("price", e.target.value)}
          >
            <option disabled value={""} className="mb-2 p-0">
              Chọn mức giá
            </option>
            {filterPrice.map((item) => (
              <option
                key={item.id}
                value={item.value}
                className={`border-travel-gray-100 mb-2 border last:mb-0 ${search.price === item.value ? "bg-travel-primary text-white" : "hover:border-travel-primary hover:bg-transparent"}`}
              >
                {item.label}
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
