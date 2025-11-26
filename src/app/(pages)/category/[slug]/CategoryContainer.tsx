"use client";
import { useState } from "react";
import { Filter } from "./Filter";
import { TourList } from "./TourList";
import { CategoryDetail } from "@/types/category";

export const CategoryContainer = ({
  categoryDetail,
  slug,
}: {
  categoryDetail: CategoryDetail;
  slug: string;
}) => {
  const [filterActive, setFilterActive] = useState(false);

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
              <h2 className="text-travel-primary mb-2.5 text-2xl font-semibold capitalize sm:text-[28px]">
                {categoryDetail.name}
              </h2>
              <div
                className="text-travel-gray-900 mb-2.5 text-justify text-sm font-normal sm:mb-4"
                dangerouslySetInnerHTML={{
                  __html: categoryDetail.description,
                }}
              ></div>

              <TourList setFilterActive={setFilterActive} slug={slug} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
