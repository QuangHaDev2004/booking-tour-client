"use client";
import { useState } from "react";
import { Filter } from "./Filter";
import { TourList } from "./TourList";
import { useSearchParams } from "next/navigation";

export const SearchContainer = () => {
  const [filterActive, setFilterActive] = useState(false);
  const searchParams = useSearchParams();
  const keyword = searchParams.get("keyword") || "";

  return (
    <>
      <div className="py-[45px] sm:py-[60px]">
        <div className="container">
          <div className="flex gap-[23px]">
            <Filter
              filterActive={filterActive}
              setFilterActive={setFilterActive}
            />

            <div className="flex-1">
              <h2 className="text-travel-primary mb-2.5 text-2xl font-semibold sm:text-[28px]">
                Kết quả tìm kiếm{" "}
                {keyword && (
                  <span className="">
                    cho từ khóa <em className="text-travel-red">{keyword}</em>
                  </span>
                )}
              </h2>

              <TourList setFilterActive={setFilterActive} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
