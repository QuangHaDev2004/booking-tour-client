/* eslint-disable @next/next/no-img-element */
"use client";
import { TourItem } from "@/components/tour/TourItem";
import Link from "next/link";
import { useState } from "react";
import { FaAnglesLeft, FaAnglesRight, FaFilter } from "react-icons/fa6";

const sortOptions = [
  {
    id: 1,
    label: "Tất cả",
    value: "",
  },
  {
    id: 2,
    label: "Giá tăng dần",
    value: "priceNewAdult-asc",
  },
  {
    id: 3,
    label: "Giá giảm dần",
    value: "priceNewAdult-desc",
  },
  {
    id: 4,
    label: "Ngày khởi hành gần đây",
    value: "departureDate-asc",
  },
];

const cityList = [
  {
    id: 1,
    name: "Hà Nội",
  },
  {
    id: 2,
    name: "Đà Nẵng",
  },
  {
    id: 3,
    name: "Hồ Chí Minh",
  },
];

const filterPrice = [
  {
    id: 1,
    label: "Dưới 5 triệu",
  },
  {
    id: 2,
    label: "Từ 5 - 10 triệu",
  },
  {
    id: 3,
    label: "Từ 10 - 20 triệu",
  },
  {
    id: 4,
    label: "Trên 20 triệu",
  },
];

export default function TourList() {
  const [filterActive, setFilterActive] = useState(false);

  return (
    <>
      {/* Breadcrumb */}
      <div className="relative">
        {/* Image */}
        <div className="h-[253px]">
          <img
            src="/assets/images/breadcrumb-demo.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        {/* Content */}
        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(69, 2, 199, 0.8) 100%)",
          }}
          className="absolute top-0 left-0 flex h-full w-full flex-col justify-end pb-5"
        >
          <div className="container">
            <h1 className="mb-2 text-[20px] font-medium text-white capitalize sm:text-[32px]">
              Tour Nước Ngoài
            </h1>
            <nav className="flex flex-wrap items-center gap-x-2.5 gap-y-[5px] text-[11px] font-normal text-white sm:gap-x-4 sm:text-[16px]">
              <Link href={""}>Trang Chủ</Link>
              <FaAnglesRight className="text-[8px] sm:text-[10px]" />

              <Link href={""}>Tour Trong Nước</Link>
              <FaAnglesRight className="text-[8px] sm:text-[10px]" />

              <Link href={""}>Tour Miền Bắc</Link>
              <FaAnglesRight className="text-[8px] sm:text-[10px]" />

              <span className="font-bold">
                Tour Hà Nội - Ninh Bình - Hạ Long - Yên Tử - Sapa | 6N5D
              </span>
            </nav>
          </div>
        </div>
      </div>

      <div className="py-[45px] sm:py-[60px]">
        <div className="container">
          <div className="flex gap-[23px]">
            {/* Filter */}
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
                  <button className="cursor-pointer">
                    <FaFilter className="text-travel-primary text-[20px]" />
                  </button>
                </div>
                <div className="flex flex-col gap-[5px]">
                  <label
                    htmlFor=""
                    className="text-travel-gray-3 text-sm font-semibold"
                  >
                    Mức giá
                  </label>
                  <select className="select border-travel-gray-3 text-travel-gray-3 w-full rounded-sm border bg-white px-3 text-sm font-medium">
                    <option className="hover:bg-travel-primary/80 rounded-sm py-2 hover:text-white">
                      -- Chọn mức giá --
                    </option>
                    {filterPrice.map((price) => (
                      <option
                        key={price.id}
                        className="hover:bg-travel-primary/80 rounded-sm py-2 hover:text-white"
                      >
                        {price.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-[5px]">
                  <label
                    htmlFor=""
                    className="text-travel-gray-3 text-sm font-semibold"
                  >
                    Điểm đi
                  </label>
                  <select className="select border-travel-gray-3 text-travel-gray-3 w-full rounded-sm border bg-white px-3 text-sm font-medium">
                    <option className="hover:bg-travel-primary/80 rounded-sm py-2 hover:text-white">
                      -- Chọn điểm đi --
                    </option>
                    {cityList.map((city) => (
                      <option
                        key={city.id}
                        className="hover:bg-travel-primary/80 rounded-sm py-2 hover:text-white"
                      >
                        {city.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-[5px]">
                  <label
                    htmlFor=""
                    className="text-travel-gray-3 text-sm font-semibold"
                  >
                    Điểm đến
                  </label>
                  <select className="select border-travel-gray-3 text-travel-gray-3 w-full rounded-sm border bg-white px-3 text-sm font-medium">
                    <option className="hover:bg-travel-primary/80 rounded-sm py-2 hover:text-white">
                      -- Chọn điểm đến --
                    </option>
                    {cityList.map((city) => (
                      <option
                        key={city.id}
                        className="hover:bg-travel-primary/80 rounded-sm py-2 hover:text-white"
                      >
                        {city.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-[5px]">
                  <label
                    htmlFor=""
                    className="text-travel-gray-3 text-sm font-semibold"
                  >
                    Ngày khởi hành
                  </label>
                  <input
                    type="date"
                    className="border-travel-gray-3 text-travel-gray-3 h-[38px] rounded-sm border px-3 text-sm"
                  />
                </div>
                <div className="flex flex-col gap-[5px]">
                  <label
                    htmlFor=""
                    className="text-travel-gray-3 text-sm font-semibold"
                  >
                    Số Lượng Hành Khách
                  </label>
                  <div className="flex flex-col gap-[5px]">
                    <div className="border-travel-gray-3 flex h-[38px] items-center rounded-sm border px-3">
                      <label
                        htmlFor=""
                        className="text-travel-gray-3 flex-1 text-sm font-normal"
                      >
                        Người lớn:
                      </label>
                      <input
                        type="number"
                        className="border-travel-gray-3 w-12 rounded-sm border px-2 py-1 text-center text-sm"
                      />
                    </div>
                    <div className="border-travel-gray-3 flex h-[38px] items-center rounded-sm border px-3">
                      <label
                        htmlFor=""
                        className="text-travel-gray-3 flex-1 text-sm font-normal"
                      >
                        Trẻ em:
                      </label>
                      <input
                        type="number"
                        className="border-travel-gray-3 w-12 rounded-sm border px-2 py-1 text-center text-sm"
                      />
                    </div>
                    <div className="border-travel-gray-3 flex h-[38px] items-center rounded-sm border px-3">
                      <label
                        htmlFor=""
                        className="text-travel-gray-3 flex-1 text-sm font-normal"
                      >
                        Em bé:
                      </label>
                      <input
                        type="number"
                        className="border-travel-gray-3 w-12 rounded-sm border px-2 py-1 text-center text-sm"
                      />
                    </div>
                  </div>
                </div>
                <button className="bg-travel-primary h-[38px] cursor-pointer rounded-[5px] text-sm font-medium text-white hover:brightness-95">
                  Áp Dụng
                </button>
                <button className="bg-travel-red h-[38px] cursor-pointer rounded-[5px] text-sm font-medium text-white hover:brightness-95">
                  Xóa bộ lọc
                </button>
              </div>

              {/* Overlay */}
              <div
                onClick={() => setFilterActive(false)}
                className={`bg-travel-overlay fixed inset-0 h-full w-full ${filterActive ? "block" : "hidden"}`}
              ></div>
            </div>

            {/* Tour List */}
            <div className="flex-1">
              <h2 className="text-travel-primary mb-2.5 text-2xl font-semibold capitalize sm:text-[28px]">
                Tour Nước Ngoài
              </h2>
              <p className="text-travel-gray-2 mb-2.5 text-justify text-sm font-normal sm:mb-4">
                Du lịch Châu Á: là châu lục lớn và đông dân nhất thế giới. Châu
                Á cũng có nhiều danh lam thắng cảnh đẹp tại một số quốc gia như
                Hàn Quốc, Nhật Bản, Trung Quốc, Việt Nam,... và VK Travel là nhà
                tổ chức du lịch chuyên nghiệp hàng đầu Châu Á, đã 5 lần liên
                tiếp nhận giải TTG Travel Awards. Hãy cùng 28.Travel du lịch
                Châu Á để tận hưởng những dịch vụ tốt nhất.
              </p>

              <div className="mb-[30px] flex flex-wrap items-center justify-between gap-2.5 sm:gap-4">
                <div className="flex w-full flex-wrap items-center gap-4 lg:w-auto">
                  <span className="text-travel-gray-2 text-sm font-semibold">
                    Sắp xếp theo :
                  </span>
                  <select className="select border-travel-primary w-[240px] rounded-sm border bg-white px-4 text-sm font-medium sm:w-[280px]">
                    <option className="hover:bg-travel-primary/80 rounded-sm py-2 hover:text-white">
                      Tất cả
                    </option>
                    <option className="hover:bg-travel-primary/80 rounded-sm py-2 hover:text-white">
                      Giá tăng dần
                    </option>
                    <option className="hover:bg-travel-primary/80 rounded-sm py-2 hover:text-white">
                      Giá giảm dần
                    </option>
                    <option className="hover:bg-travel-primary/80 rounded-sm py-2 hover:text-white">
                      Ngày khởi hành gần nhất
                    </option>
                  </select>
                </div>
                <div className="text-travel-gray-2 text-sm font-normal">
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
                  <FaFilter className="text-travel-primary text-[16px] sm:text-[20px]" />
                </button>
              </div>

              <div className="mb-[30px] grid grid-cols-2 gap-2.5 lg:grid-cols-3 lg:gap-[20px]">
                <TourItem />
                <TourItem />
                <TourItem />
                <TourItem />
                <TourItem />
                <TourItem />
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-end">
                <div className="border-travel-primary flex h-10 w-10 cursor-pointer items-center justify-center rounded-tl-[5px] rounded-bl-[5px] border border-r-0">
                  <FaAnglesLeft className="text-travel-primary text-xs" />
                </div>
                <div className="border-travel-primary text-travel-primary flex h-10 w-10 cursor-pointer items-center justify-center border border-r-0 text-sm">
                  1
                </div>
                <div className="border-travel-primary text-travel-primary flex h-10 w-10 cursor-pointer items-center justify-center border border-r-0 text-sm">
                  2
                </div>
                <div className="border-travel-primary text-travel-primary flex h-10 w-10 cursor-pointer items-center justify-center border border-r-0 text-sm">
                  3
                </div>
                <div className="border-travel-primary text-travel-primary flex h-10 w-10 cursor-pointer items-center justify-center border border-r-0 text-sm">
                  4
                </div>
                <div className="border-travel-primary flex h-10 w-10 cursor-pointer items-center justify-center rounded-tr-[5px] rounded-br-[5px] border">
                  <FaAnglesRight className="text-travel-primary text-xs" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
