/* eslint-disable @next/next/no-img-element */
"use client";
import { CounterInput } from "@/components/common/CounterInput";
import Link from "next/link";
import { useState } from "react";
import { FaChevronRight, FaXmark } from "react-icons/fa6";

export const CartDetail = () => {
  const [adultQuantity, setAdultQuantity] = useState<number | string>(1);
  const [childrenQuantity, setChildrenQuantity] = useState<number | string>(0);
  const [babyQuantity, setBabyQuantity] = useState<number | string>(0);

  return (
    <>
      <div className="mb-[30px] rounded-2xl bg-white px-4 py-5 sm:py-8 shadow-md">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-travel-primary text-[16px] sm:text-[20px] font-semibold capitalize">
            Giỏ Hàng
          </h2>
          <Link
            href={""}
            className="text-travel-secondary hover:text-travel-primary flex items-center gap-1 text-xs sm:text-sm font-normal transition-all duration-300"
          >
            Quay lại mua hàng
            <FaChevronRight size={12} />
          </Link>
        </div>

        <div className="mb-4 flex flex-col gap-4">
          <div className="border-travel-gray-100/20 flex flex-wrap border-b pb-4">
            <div className="lg:mr-2.5 mb-2.5 flex w-full flex-row-reverse items-center justify-between gap-8 lg:mb-0 lg:w-auto lg:flex-col lg:justify-start">
              <FaXmark className="text-travel-red size-5 cursor-pointer" />
              <input
                type="checkbox"
                defaultChecked
                className="checkbox checkbox-primary"
              />
            </div>
            <div className="flex items-start gap-2.5 sm:gap-4 lg:mb-0 mb-2.5">
              <div className="lg:aspect-[150/120] lg:w-[150px] aspect-[118/100] w-[118px] overflow-hidden rounded-md">
                <img
                  src="https://www.vietnambooking.com/wp-content/uploads/2023/04/tuyen-diem-du-lich-viet-nam-4.jpg"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="w-full flex-1 lg:flex-none lg:w-[280px] ">
                <Link
                  href={""}
                  className="text-travel-secondary hover:text-travel-primary mb-1.5 sm:mb-3 line-clamp-2 text-sm sm:text-[16px] font-medium transition-all duration-300"
                >
                  Tour Châu Âu Đón Noel | 11N10D | Pháp – Thụy Sĩ – Ý
                </Link>
                <div className="text-travel-gray-900 flex flex-col gap-1 text-xs sm:text-sm">
                  <div className="">
                    Ngày Khởi Hành: <b>20/10/2024</b>
                  </div>
                  <div className="">
                    Khởi Hành Tại: <b>Hà Nội</b>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 lg:ml-2.5">
              <label
                htmlFor=""
                className="text-travel-secondary mb-2 block lg:text-right text-sm font-normal"
              >
                Số Lượng Hành Khách
              </label>
              <div className="flex flex-col gap-2">
                <div className="flex items-center">
                  <label
                    htmlFor=""
                    className="text-travel-secondary inline-block w-20 text-sm font-normal"
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
                    <span className="text-travel-primary text-sm font-semibold sm:text-[16px]">
                      10.000.000đ
                    </span>
                    <span className="text-xs sm:text-sm">/khách</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <label
                    htmlFor=""
                    className="text-travel-secondary inline-block w-20 text-sm font-normal"
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
                    <span className="text-travel-primary text-sm font-semibold sm:text-[16px]">
                      10.000.000đ
                    </span>
                    <span className="text-xs sm:text-sm">/khách</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <label
                    htmlFor=""
                    className="text-travel-secondary inline-block w-20 text-sm font-normal"
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
                    <span className="text-travel-primary text-sm font-semibold sm:text-[16px]">
                      10.000.000đ
                    </span>
                    <span className="text-xs sm:text-sm">/khách</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4 flex items-center justify-end">
          <div className="flex w-full sm:w-[429px]">
            <input
              type="text"
              className="text-travel-secondary border-travel-primary h-10 flex-1 rounded-tl-sm rounded-bl-sm border px-3 text-sm font-normal"
            />
            <button className="bg-travel-primary h-10 w-[110px] cursor-pointer rounded-tr-sm rounded-br-sm text-sm font-normal text-white capitalize">
              Dùng Mã
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-2 sm:gap-4">
          <div className="text-travel-secondary flex items-center justify-between font-normal">
            <div className="text-sm">Tạm tính: </div>
            <div className="text-[16px]">15.070.000 đ</div>
          </div>
          <div className="text-travel-secondary flex items-center justify-between font-normal">
            <div className="text-sm">Giảm: </div>
            <div className="">0 đ</div>
          </div>
          <div className="text-travel-secondary flex items-center justify-between">
            <div className="text-sm">Thanh toán: </div>
            <div className="text-travel-primary text-[22px] font-bold">
              15.070.000 đ
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
