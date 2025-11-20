/* eslint-disable @next/next/no-img-element */
"use client";
import { CounterInput } from "@/components/common/CounterInput";
import { useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { GrMapLocation } from "react-icons/gr";
import { HiOutlineUserGroup } from "react-icons/hi";
import { IoTicketOutline } from "react-icons/io5";
import { LuAlarmClock } from "react-icons/lu";

export const YourTrip = () => {
  const [adultQuantity, setAdultQuantity] = useState<number | string>(1);
  const [childrenQuantity, setChildrenQuantity] = useState<number | string>(0);
  const [babyQuantity, setBabyQuantity] = useState<number | string>(0);

  return (
    <div className="sticky top-24 right-0 rounded-lg bg-white p-4 sm:p-6 shadow-md">
      <h2 className="text-travel-primary mb-4 text-[20px] font-bold">
        Chuyến Đi Của Bạn
      </h2>

      <div className="mb-4 flex items-center gap-3">
        <div className="aspect-[132/98] w-[103px] sm:w-[132px] overflow-hidden rounded-lg">
          <img
            src="https://ik.imagekit.io/tvlk/blog/2022/02/dia-diem-du-lich-viet-nam-cover.jpeg"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="text-travel-primary flex-1 text-sm sm:text-[16px] font-normal">
          Hà Nội - Ninh Bình - Hạ Long - Yên Tử - Sapa | 6N5D
        </div>
      </div>

      <div className="text-travel-gray-900 mb-4 flex flex-col gap-2 text-sm">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <IoTicketOutline size={20} />
            Mã Tour:
          </div>
          <div className="text-travel-primary font-semibold">
            NNSGN359-037-251125DR-V-H-6
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <GrMapLocation size={20} />
            Khởi hành:
          </div>
          <div className="text-travel-primary font-semibold">
            TP. Hồ Chí Minh
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <FaRegCalendarAlt size={20} />
            Ngày khởi hành:
          </div>
          <div className="text-travel-primary font-semibold">25-11-2025</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <LuAlarmClock size={20} />
            Thời gian:
          </div>
          <div className="text-travel-primary font-semibold">5N4Đ</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <HiOutlineUserGroup size={20} />
            Số chỗ còn:
          </div>
          <div className="text-travel-primary font-semibold">8</div>
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="" className="text-travel-gray-900 mb-2 block text-sm">
          Số lượng hành khách:
        </label>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <label
              htmlFor=""
              className="text-travel-gray-900 mb-1 inline-block w-20 sm:w-[100px] text-sm"
            >
              Người lớn:
            </label>
            <CounterInput
              min={1}
              max={10}
              value={adultQuantity}
              setQuantity={setAdultQuantity}
            />
            <div className="text-travel-gray-900 flex-1 text-right">
              <span className="text-travel-primary font-semibold text-sm sm:text-[16px]">
                10.000.000đ
              </span>
              <span className="text-xs sm:text-sm">/khách</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <label
              htmlFor=""
              className="text-travel-gray-900 mb-1 inline-block w-20 sm:w-[100px] text-sm"
            >
              Trẻ em:
            </label>
            <CounterInput
              min={0}
              max={10}
              value={childrenQuantity}
              setQuantity={setChildrenQuantity}
            />
            <div className="text-travel-gray-900 flex-1 text-right">
              <span className="text-travel-primary font-semibold text-sm sm:text-[16px]">
                10.000.000đ
              </span>
              <span className="text-xs sm:text-sm">/khách</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <label
              htmlFor=""
              className="text-travel-gray-900 mb-1 inline-block w-20 sm:w-[100px] text-sm"
            >
              Em bé:
            </label>
            <CounterInput
              min={0}
              max={10}
              value={babyQuantity}
              setQuantity={setBabyQuantity}
            />
            <div className="text-travel-gray-900 flex-1 text-right">
              <span className="text-travel-primary font-semibold text-sm sm:text-[16px]">
                10.000.000đ
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
    </div>
  );
};
