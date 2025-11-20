/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";

export const BookingForm = () => {
  const [paymentMethod, setPaymentMethod] = useState("money");

  return (
    <>
      <div className="mb-[30px] rounded-2xl bg-white px-4 py-5 sm:py-8 shadow-md">
        <h2 className="text-travel-primary mb-4 text-[16px] sm:text-[20px] font-semibold capitalize">
          Thông Tin Khách Hàng
        </h2>

        <div className="mb-[30px] grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
          <input
            type="text"
            className="text-travel-secondary h-[50px] rounded-md border border-[#E0E0E0] px-5 text-sm font-normal"
            placeholder="Họ và tên"
          />
          <input
            type="text"
            className="text-travel-secondary h-[50px] rounded-md border border-[#E0E0E0] px-5 text-sm font-normal"
            placeholder="Số điện thoại"
          />
          <textarea
            name=""
            id=""
            placeholder="Ghi chú"
            className="text-travel-secondary sm:col-span-2 h-[100px] resize-none rounded-md border border-[#E0E0E0] px-5 py-3 text-sm font-normal"
          ></textarea>
        </div>

        <h2 className="text-travel-primary mb-4 text-[16px] sm:text-[20px] font-semibold capitalize">
          Chọn phương thức thanh toán
        </h2>
        <div className="mb-5 flex flex-col gap-1.5 sm:gap-2.5">
          <label className="flex cursor-pointer items-center gap-2.5">
            <input
              type="radio"
              name="money"
              value="money"
              checked={paymentMethod === "money"}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="radio radio-primary h-5 w-5"
            />
            <div className="text-travel-secondary text-sm font-normal">
              Thanh toán tiền mặt khi đi tour
            </div>
            <img
              src="/assets/images/money.svg"
              alt=""
              className="border-travel-gray-100/20 h-[35px] w-[70px] rounded-md border object-contain px-1"
            />
          </label>
          <label className="flex cursor-pointer items-center gap-2.5">
            <input
              type="radio"
              name="vnpay"
              value="vnpay"
              checked={paymentMethod === "vnpay"}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="radio radio-primary h-5 w-5"
            />
            <div className="text-travel-secondary text-sm font-normal">
              VNPay
            </div>
            <img
              src="/assets/images/vnpay.png"
              alt=""
              className="border-travel-gray-100/20 h-[35px] w-[70px] rounded-md border object-contain px-1"
            />
          </label>
          <label className="flex cursor-pointer items-center gap-2.5">
            <input
              type="radio"
              name="zalopay"
              value="zalopay"
              checked={paymentMethod === "zalopay"}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="radio radio-primary h-5 w-5"
            />
            <div className="text-travel-secondary text-sm font-normal">
              ZaloPay
            </div>
            <img
              src="/assets/images/zalopay.png"
              alt=""
              className="border-travel-gray-100/20 h-[35px] w-[70px] rounded-md border object-contain px-1"
            />
          </label>
          <label className="flex cursor-pointer items-center gap-2.5">
            <input
              type="radio"
              name="bank"
              value="bank"
              checked={paymentMethod === "bank"}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="radio radio-primary h-5 w-5"
            />
            <div className="text-travel-secondary text-sm font-normal">
              Chuyển khoản ngân hàng
            </div>
            <img
              src="/assets/images/bank.svg"
              alt=""
              className="border-travel-gray-100/20 h-[35px] w-[70px] rounded-md border object-contain px-1"
            />
          </label>
        </div>

        {paymentMethod === "bank" && (
          <div className="mb-8 rounded-sm bg-[#F3F3F3] p-4">
            <div className="text-travel-primary mb-2.5 text-[16px] font-semibold">
              Thông tin chuyển khoản
            </div>
            <div className="text-travel-secondary flex flex-col gap-1.5 text-sm font-normal">
              <div className="">Ngân hàng : Vietcombank</div>
              <div className="">Tên tài khoản: Le Van A</div>
              <div className="">STK: 0123456789</div>
            </div>
          </div>
        )}

        <div className="text-center">
          <button className="bg-travel-primary cursor-pointer h-[46px] w-full sm:w-[480px] rounded-lg text-[20px] font-semibold text-white uppercase">
            ĐẶT Tour
          </button>
        </div>
      </div>
    </>
  );
};
