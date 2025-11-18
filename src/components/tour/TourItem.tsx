/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaBolt } from "react-icons/fa6";
import { GrMapLocation } from "react-icons/gr";
import { LuAlarmClock } from "react-icons/lu";

export const TourItem = () => {
  return (
    <div
      style={{ boxShadow: "0px 2.38px 2.38px 0px #00000040" }}
      className="group/item overflow-hidden rounded-md bg-white"
    >
      <div className="-mb-3 aspect-3/2 sm:aspect-[271/237] overflow-hidden rounded-md">
        <Link href={""}>
          <img
            src="https://saigontourist.net/media/private/PIgm7G/hu4iWV/2d537728.jpg.thumb/880x660.jpg"
            alt=""
            className="h-full w-full object-cover transition-all duration-500 group-hover/item:scale-105"
          />
        </Link>
      </div>
      <div className="bg-travel-red relative -mt-5 inline-flex items-center gap-1.5 rounded-tr-4xl rounded-br-4xl pt-1 pr-3 pb-[2px] pl-[5px] text-xs font-semibold text-white uppercase">
        <FaBolt className="text-travel-yellow text-sm" />
        Giảm -30%
      </div>
      <div className="p-2.5">
        <h2 className="text-travel-secondary hover:text-travel-primary mb-2 line-clamp-2 text-[16px] font-bold transition-all duration-300">
          <Link href={""}>
            Tour 2024 Phú Quốc – Thiên Đường Đảo Ngọc (3N2D)
          </Link>
        </h2>
        <div className="text-travel-secondary/80 mb-2.5 flex flex-col gap-2 text-xs font-medium">
          <div className="flex items-center gap-2">
            <GrMapLocation size={16} />
            <span>
              Khởi Hành: <b className="text-travel-primary">Hà Nội</b>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <FaRegCalendarAlt size={16} />
            Ngày Khởi Hành: 22/07/2024
          </div>
          <div className="flex items-center gap-2">
            <LuAlarmClock size={16} />
            Thời gian: 3 ngày 2 đêm
          </div>
        </div>
        <div className="border-travel-red flex h-10 items-center justify-between rounded-4xl border">
          <div className="px-3 text-[16px] font-semibold">
            10.000.000<span className="underline">đ</span>
          </div>
          <Link
            href={""}
            className="bg-travel-red group/button relative flex h-10 items-center justify-center overflow-hidden rounded-4xl px-4 text-sm font-semibold text-white uppercase transition-colors duration-500"
          >
            <span className="bg-travel-secondary absolute inset-0 -translate-x-full transition-transform duration-500 group-hover/button:translate-x-0"></span>
            <span className="relative">Đặt ngay</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
