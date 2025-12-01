/* eslint-disable @next/next/no-img-element */
"use client";
import { FaChevronDown, FaMagnifyingGlass } from "react-icons/fa6";
import { LuBadgeDollarSign } from "react-icons/lu";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { filterPrice } from "@/constants/filter";
import { DatePickerCalendar } from "../ui/DatePickerCalendar";

export const FormSearch = () => {
  const router = useRouter();

  const initialSearch = { keyword: "", departureDate: "", price: "" };
  const [search, setSearch] = useState(initialSearch);

  const handleUpdateSearch = (key: string, value: string) => {
    setSearch((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
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
      className="flex flex-wrap gap-3 rounded-lg bg-[#00000066] p-4 md:gap-4 md:p-6 lg:gap-5 lg:p-10"
    >
      {/* Location */}
      <div className="flex h-14 w-full items-center gap-3 rounded-lg bg-white px-3 py-2">
        <img
          src="/assets/images/icon-address.svg"
          alt="Icon Address"
          className="h-5 w-[18px]"
        />
        <input
          onChange={(e) => handleUpdateSearch("keyword", e.target.value)}
          type="text"
          placeholder="Bạn muốn đi đâu?"
          className="h-full flex-1 text-sm font-normal placeholder:text-[#A6A6A6]"
        />
        <FaChevronDown className="text-travel-primary size-2.5" />
      </div>

      {/* Time */}
      <div className="flex h-14 w-full items-center gap-3 rounded-md bg-white px-3 py-2 md:w-[37.5%]">
        <img
          src="/assets/images/icon-calendar.svg"
          alt="Icon Calendar"
          className="h-5 w-[18px]"
        />
        <DatePickerCalendar
          onChange={(value: string) =>
            handleUpdateSearch("departureDate", value)
          }
          className="w-full text-sm font-normal placeholder:text-[#A6A6A6]"
        />
      </div>

      {/* Price */}
      <div className="flex h-14 w-full items-center gap-3 rounded-md bg-white px-3 py-2 md:w-[37.5%]">
        <LuBadgeDollarSign className="text-travel-primary/60 size-5" />
        <select
          className="select h-auto w-full flex-1 border-none bg-none p-0 text-sm font-normal text-[#A6A6A6] shadow-none [&>option::checkmark]:hidden"
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

      <button
        type="submit"
        style={{ boxShadow: "0px 3.3px 3.3px 0px #00000040" }}
        className="bg-travel-primary flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-md px-4 py-[18px] text-white transition-all duration-300 hover:brightness-95"
      >
        <FaMagnifyingGlass className="text-xl" />
        <span className="text-[13px] font-semibold">Tìm Kiếm</span>
      </button>
    </form>
  );
};
