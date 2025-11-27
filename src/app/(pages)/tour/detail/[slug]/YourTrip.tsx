/* eslint-disable @next/next/no-img-element */
"use client";
import { CounterInput } from "@/components/common/CounterInput";
import { TourDetail } from "@/types/tour";
import { useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaCar } from "react-icons/fa6";
import { GrMapLocation } from "react-icons/gr";
import { HiOutlineUserGroup } from "react-icons/hi";
import { IoTicketOutline } from "react-icons/io5";
import { LuAlarmClock } from "react-icons/lu";

export const YourTrip = ({ tourDetail }: { tourDetail: TourDetail }) => {
  const [adultQuantity, setAdultQuantity] = useState<number | string>(1);
  const [childrenQuantity, setChildrenQuantity] = useState<number | string>(0);
  const [babyQuantity, setBabyQuantity] = useState<number | string>(0);

  return (
    <div className="sticky top-24 right-0 rounded-lg bg-white p-4 shadow-md sm:p-6">
      <h2 className="text-travel-primary mb-4 text-[20px] font-bold">
        Chuyến Đi Của Bạn
      </h2>

      {tourDetail ? (
        <>
          <div className="mb-4 flex items-center gap-3">
            <div className="aspect-[132/98] w-[103px] overflow-hidden rounded-lg sm:w-[132px]">
              <img
                src={tourDetail.avatar}
                alt={tourDetail.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="text-travel-primary line-clamp-2 flex-1 text-sm font-normal sm:text-[16px]">
              {tourDetail.name}
            </div>
          </div>

          <div className="text-travel-gray-900 mb-4 flex flex-col gap-2 text-sm">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <IoTicketOutline size={20} />
                Mã Tour:
              </div>
              <div className="text-travel-primary font-semibold">
                {tourDetail.tourCode}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <GrMapLocation size={20} />
                Khởi hành:
              </div>
              <div className="text-travel-primary font-semibold">
                {tourDetail.locationsFromName
                  .map((item) => item.name)
                  .join(", ")}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <FaRegCalendarAlt size={20} />
                Ngày khởi hành:
              </div>
              <div className="text-travel-primary font-semibold">
                {tourDetail.departureDateFormat}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <LuAlarmClock size={20} />
                Thời gian:
              </div>
              <div className="text-travel-primary font-semibold">
                {tourDetail.time}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <FaCar size={20} />
                Phương tiện:
              </div>
              <div className="text-travel-primary font-semibold">
                {tourDetail.vehicle}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <HiOutlineUserGroup size={20} />
                Số chỗ còn:
              </div>
              <div className="text-travel-primary font-semibold">
                {tourDetail.stockAdult}
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor=""
              className="text-travel-gray-900 mb-2 block text-sm"
            >
              Số lượng hành khách:
            </label>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <label
                  htmlFor=""
                  className="text-travel-gray-900 mb-1 inline-block w-20 text-sm sm:w-[100px]"
                >
                  Người lớn:
                </label>
                <CounterInput
                  min={1}
                  max={tourDetail.stockAdult}
                  value={adultQuantity}
                  setQuantity={setAdultQuantity}
                />
                <div className="text-travel-gray-900 flex-1 text-right">
                  <span className="text-travel-primary text-sm font-semibold sm:text-[16px]">
                    {tourDetail.priceNewAdult.toLocaleString("vi-VN")}đ
                  </span>
                  <span className="text-xs sm:text-sm">/khách</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor=""
                  className="text-travel-gray-900 mb-1 inline-block w-20 text-sm sm:w-[100px]"
                >
                  Trẻ em:
                </label>
                <CounterInput
                  min={0}
                  max={tourDetail.stockChildren}
                  value={childrenQuantity}
                  setQuantity={setChildrenQuantity}
                />
                <div className="text-travel-gray-900 flex-1 text-right">
                  <span className="text-travel-primary text-sm font-semibold sm:text-[16px]">
                    {tourDetail.priceNewChildren.toLocaleString("vi-VN")}đ
                  </span>
                  <span className="text-xs sm:text-sm">/khách</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor=""
                  className="text-travel-gray-900 mb-1 inline-block w-20 text-sm sm:w-[100px]"
                >
                  Em bé:
                </label>
                <CounterInput
                  min={0}
                  max={tourDetail.stockBaby}
                  value={babyQuantity}
                  setQuantity={setBabyQuantity}
                />
                <div className="text-travel-gray-900 flex-1 text-right">
                  <span className="text-travel-primary text-sm font-semibold sm:text-[16px]">
                    {tourDetail.priceNewBaby.toLocaleString("vi-VN")}đ
                  </span>
                  <span className="text-xs sm:text-sm">/khách</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-4 flex items-center justify-between">
            <label
              htmlFor=""
              className="text-travel-secondary text-[16px] font-normal"
            >
              Tổng tiền:
            </label>
            <div className="text-travel-primary text-[20px] font-semibold">
              10.000.000 đ
            </div>
          </div>

          <button className="bg-travel-primary border-travel-primary text hover:text-travel-primary h-11 w-full cursor-pointer rounded-lg border text-[16px] font-semibold text-white transition-all duration-300 hover:bg-transparent">
            Thêm Vào Giỏ Hàng
          </button>
        </>
      ) : (
        <div className="">Chưa có thông tin cho tour này</div>
      )}
    </div>
  );
};
