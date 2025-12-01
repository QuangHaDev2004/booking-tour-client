"use client";
import { DatePickerCalendar } from "@/components/ui/DatePickerCalendar";
import { filterPrice } from "@/constants/filter";
import { useCityList } from "@/hooks/useCityList";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FiFilter } from "react-icons/fi";

export const Filter = ({
  filterActive,
  setFilterActive,
}: {
  filterActive: boolean;
  setFilterActive: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { cityList } = useCityList();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const initialFilters = {
    price: searchParams.get("price") || "",
    locationFrom: searchParams.get("locationFrom") || "",
    locationTo: searchParams.get("locationTo") || "",
    departureDate: searchParams.get("departureDate") || "",
  };

  const [filters, setFilters] = useState(initialFilters);

  const handleUpdateFilter = (key: string, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleApplyFilter = () => {
    const params = new URLSearchParams(searchParams);
    Object.entries(filters).forEach(([key, value]) => {
      if (value) params.set(key, value);
      else params.delete(key);
    });

    router.push(`/search?${params.toString()}`, { scroll: false });
  };

  const handleResetFilter = () => {
    setFilters({
      price: "",
      locationFrom: "",
      locationTo: "",
      departureDate: "",
    });

    router.push(pathname, { scroll: false });
  };

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
            <button>
              <FiFilter className="text-travel-primary size-6" />
            </button>
          </div>
          <div className="flex flex-col gap-[5px]">
            <label
              htmlFor="price"
              className="text-travel-secondary/80 text-sm font-semibold"
            >
              Ngân sách
            </label>
            <select
              value={filters.price}
              onChange={(e) => handleUpdateFilter("price", e.target.value)}
              className="select border-travel-secondary/20 text-travel-secondary w-full rounded-sm border bg-white px-3 text-sm font-medium"
            >
              <option value="" className="rounded-sm py-2">
                Tất cả
              </option>
              {filterPrice.map((price) => (
                <option
                  key={price.id}
                  value={price.value}
                  className="rounded-sm py-2"
                >
                  {price.label}
                </option>
              ))}
            </select>
          </div>

          {cityList && cityList.length > 0 && (
            <>
              <div className="flex flex-col gap-[5px]">
                <label
                  htmlFor="locationsFrom"
                  className="text-travel-secondary/80 text-sm font-semibold"
                >
                  Điểm đi
                </label>
                <select
                  value={filters.locationFrom}
                  onChange={(e) =>
                    handleUpdateFilter("locationFrom", e.target.value)
                  }
                  className="select border-travel-secondary/20 text-travel-secondary w-full rounded-sm border bg-white px-3 text-sm font-medium"
                >
                  <option className="rounded-sm py-2">Tất cả</option>
                  {cityList.map((city) => (
                    <option
                      key={city.id}
                      value={city.id}
                      className="rounded-sm py-2"
                    >
                      {city.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-[5px]">
                <label
                  htmlFor="locationTo"
                  className="text-travel-secondary/80 text-sm font-semibold"
                >
                  Điểm đến
                </label>
                <select
                  value={filters.locationTo}
                  onChange={(e) =>
                    handleUpdateFilter("locationTo", e.target.value)
                  }
                  className="select border-travel-secondary/20 text-travel-secondary rounded-sm border bg-white px-3 text-sm font-medium"
                >
                  <option className="rounded-sm py-2">Tất cả</option>
                  {cityList.map((city) => (
                    <option
                      key={city.id}
                      value={city.id}
                      className="rounded-sm py-2"
                    >
                      {city.name}
                    </option>
                  ))}
                </select>
              </div>
            </>
          )}

          <div className="flex flex-col gap-[5px]">
            <label
              htmlFor="departureDate"
              className="text-travel-secondary/80 text-sm font-semibold"
            >
              Ngày khởi hành
            </label>
            {/* <input
              value={filters.departureDate}
              onChange={(e) =>
                handleUpdateFilter("departureDate", e.target.value)
              }
              type="date"
              className="border-travel-secondary/20 text-travel-secondary h-10 w-full rounded-sm border px-3 text-sm"
            ></input> */}
            <DatePickerCalendar
              value={filters.departureDate}
              onChange={(value: string) =>
                handleUpdateFilter("departureDate", value)
              }
              className="border-travel-secondary/20 placeholder:text-travel-secondary h-10 w-full rounded-sm border px-3 text-sm font-medium"
            />
          </div>

          <button
            onClick={handleApplyFilter}
            className="border-travel-primary text-travel-primary hover:bg-travel-primary/10 h-10 cursor-pointer rounded-sm border bg-white text-sm font-medium"
          >
            Áp Dụng
          </button>
          <button
            onClick={handleResetFilter}
            className="border-travel-red text-travel-red hover:bg-travel-red/10 h-10 cursor-pointer rounded-sm border bg-white text-sm font-medium"
          >
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
