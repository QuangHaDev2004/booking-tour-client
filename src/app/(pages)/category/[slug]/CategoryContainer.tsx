"use client"
import { useState } from "react";
import { Filter } from "./Filter";
import { TourList } from "./TourList";

export const CategoryContainer = () => {
  const [filterActive, setFilterActive] = useState(false);

  return (
    <>
      <div className="py-[45px] sm:py-[60px]">
        <div className="container">
          <div className="flex gap-[23px]">
            <Filter filterActive={filterActive} setFilterActive={setFilterActive} />
            <TourList setFilterActive={setFilterActive} />
          </div>
        </div>
      </div>
    </>
  );
};
