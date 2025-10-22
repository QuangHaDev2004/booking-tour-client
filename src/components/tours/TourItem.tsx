/* eslint-disable @next/next/no-img-element */

"use client";
import Link from "next/link";
import { FaBolt, FaRegStar, FaStar } from "react-icons/fa6";

export const TourItem = () => {
  return (
    <div
      style={{ boxShadow: "0px 2.38px 2.38px 0px #00000040" }}
      className="hover:shadow-gray overflow-hidden rounded-[10px] bg-white transition-all duration-300 hover:!shadow-2xl"
    >
      <div className="-mb-3 aspect-[271/237] overflow-hidden rounded-[10px]">
        <Link href={""}>
          <img
            src="/assets/images/test.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
        </Link>
      </div>
      <div className="bg-red -mt-5 inline-flex items-center gap-1.5 rounded-tr-4xl rounded-br-4xl pt-1 pr-3 pb-[2px] pl-[5px] text-xs font-semibold text-[#F9F9FA] uppercase">
        <FaBolt className="text-yellow text-sm" />
        Giảm -30%
      </div>
      <div className="p-2.5 sm:px-4 sm:pb-4">
        <h2 className="text-secondary hover:text-primary mb-1 line-clamp-2 text-sm font-bold transition-all duration-300">
          <Link href={""}>
            Tour 2024 Phú Quốc – Thiên Đường Đảo Ngọc (3N2D)
          </Link>
        </h2>
        <div className="mb-2.5 flex flex-wrap items-center gap-[5px] sm:gap-3">
          <div className="text-[15px] font-semibold text-[#52575C] line-through">
            13.650.000
            <span className="underline">đ</span>
          </div>
          <div className="text-red text-sm font-bold">
            2.590.000
            <span className="underline">đ</span>
          </div>
        </div>
        <div className="mb-2.5 flex flex-col gap-1 text-[10px] font-normal text-[#8C8C8C] sm:text-[11px]">
          <div className="">
            Mã Tour: <b>123456789</b>
          </div>
          <div className="">
            Ngày Khởi Hành: <b>22/07/2024</b>
          </div>
          <div className="">
            Thời Gian: <b>10 Ngày 9 Đêm</b>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-2.5 sm:gap-6">
          <div className="flex items-center gap-[2px]">
            <FaStar className="text-yellow text-sm" />
            <FaStar className="text-yellow text-sm" />
            <FaStar className="text-yellow text-sm" />
            <FaStar className="text-yellow text-sm" />
            <FaRegStar className="text-yellow text-sm" />
            <span className="-mb-[2px] ml-[2px] text-xs text-[#8C8C8C]">
              (5)
            </span>
          </div>
          <div className="flex items-center gap-[10px]">
            <span className="text-secondary text-[10px] font-bold">
              Số chỗ còn:
            </span>
            <span className="bg-red inline-flex h-8 w-8 items-center justify-center rounded-md text-sm font-bold text-white">
              10
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
