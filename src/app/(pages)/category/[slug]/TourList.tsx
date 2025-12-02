"use client";
import { TourItem } from "@/types/tour";
import { FiFilter } from "react-icons/fi";
import { sortList } from "@/constants/sort";
import { TourCard } from "@/components/tour/TourCart";
import { useCategoryTourList } from "@/hooks/useTourList";
import { EmptyState } from "@/components/common/EmptyState";
import { Pagination } from "@/components/pagination/pagination";
import { TourCardSkeleton } from "@/components/skeleton/TourCardSkeleton";

export const TourList = ({
  setFilterActive,
  slug,
}: {
  setFilterActive: React.Dispatch<React.SetStateAction<boolean>>;
  slug: string;
}) => {
  const { data, isLoading } = useCategoryTourList({ slug });
  const tourList: TourItem[] = data?.tourList ?? [];

  return (
    <>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2.5 sm:mb-[30px] sm:gap-4">
        <div className="flex w-full flex-wrap items-center gap-4 lg:w-auto">
          <span className="text-travel-gray-900 text-sm font-medium">
            Sắp xếp theo:
          </span>
          <select className="select border-travel-secondary/20 text-travel-secondary w-60 rounded-md border bg-white px-3 text-sm font-medium sm:w-64">
            {sortList.map((item) => (
              <option
                key={item.value}
                value={item.value}
                className="hover:bg-travel-primary rounded-sm bg-white py-2 hover:text-white"
              >
                {item.label}
              </option>
            ))}
          </select>
        </div>
        <div className="text-travel-gray-900 text-sm font-normal">
          <span>Tất cả: </span>
          <span className="text-travel-primary text-[16px] font-bold">
            38 tour
          </span>
        </div>

        {/* Button Filter Mobile */}
        <button
          onClick={() => setFilterActive(true)}
          className="flex cursor-pointer items-center gap-2 lg:hidden"
        >
          <div className="text-travel-primary text-sm font-semibold sm:text-lg">
            Bộ Lọc
          </div>
          <FiFilter className="text-travel-primary size-5 sm:size-6" />
        </button>
      </div>

      {isLoading ? (
        <div className="mb-[30px] grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[20px]">
          {Array(6)
            .fill("")
            .map((_, index) => (
              <TourCardSkeleton key={index} />
            ))}
        </div>
      ) : tourList.length > 0 ? (
        <>
          <div className="mb-[30px] grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[20px]">
            {tourList.map((item) => (
              <TourCard key={item.id} item={item} />
            ))}
          </div>

          <Pagination />
        </>
      ) : (
        <EmptyState />
      )}
    </>
  );
};
