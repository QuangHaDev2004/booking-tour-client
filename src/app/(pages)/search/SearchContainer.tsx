"use client";
import { useState } from "react";
import { TourItem } from "@/types/tour";
import { CityItem } from "@/types/city";
import { useSearchParams } from "next/navigation";
import { Filter } from "@/components/filter/Filter";
import { useSearch } from "@/hooks/search/useSearch";
import { TourResult } from "@/components/tour/TourResult";

export const SearchContainer = ({ cityList }: { cityList: CityItem[] }) => {
  const searchParams = useSearchParams();
  const keyword = searchParams.get("keyword") || "";
  const [filterActive, setFilterActive] = useState(false);

  const { data, isLoading } = useSearch();
  const tourList: TourItem[] = data?.tourList ?? [];

  return (
    <>
      <div className="py-[45px] sm:py-[60px]">
        <div className="container">
          <div className="flex gap-[23px]">
            <Filter
              cityList={cityList}
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

              <TourResult
                tourList={tourList}
                isLoading={isLoading}
                setFilterActive={setFilterActive}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
