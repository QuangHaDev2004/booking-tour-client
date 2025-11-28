/* eslint-disable @next/next/no-img-element */
"use client";
import { BookingForm } from "./BookingForm";
import { CounterInput } from "@/components/common/CounterInput";
import { useCartDetail } from "@/hooks/cart/useCartDetail";
import { useCartStore } from "@/store/useCartStore";
import { CartDetail } from "@/types/store";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaChevronRight, FaXmark } from "react-icons/fa6";
import { EmptyCart } from "./EmptyCart";

export type QuantityState = {
  [tourId: string]: {
    quantityAdult: number;
    quantityChildren: number;
    quantityBaby: number;
    inputAdult: string;
    inputChildren: string;
    inputBaby: string;
  };
};

export const CartContainer = () => {
  const { cart, updateCartItem, removeFromCart } = useCartStore();
  const [cartDetail, setCartDetail] = useState<CartDetail[] | null>([]);
  const [quantities, setQuantities] = useState<QuantityState>({});
  const { mutate } = useCartDetail({ setCartDetail });
  console.log(quantities);

  useEffect(() => {
    if (cart.length > 0) {
      mutate(cart);
    } else {
      setCartDetail([]);
      setQuantities({});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  useEffect(() => {
    if (cartDetail && cartDetail.length > 0) {
      const newQuantity: QuantityState = {};
      cartDetail.forEach((item) => {
        newQuantity[item.tourId] = {
          quantityAdult: item.quantityAdult,
          quantityChildren: item.quantityChildren,
          quantityBaby: item.quantityBaby,
          inputAdult: item.quantityAdult.toString(),
          inputChildren: item.quantityChildren.toString(),
          inputBaby: item.quantityBaby.toString(),
        };
      });

      setQuantities(newQuantity);
    }
  }, [cartDetail]);

  const subTotal =
    cartDetail?.reduce((acc, item) => {
      return (
        acc +
        item.quantityAdult * item.priceNewAdult +
        item.quantityChildren * item.priceNewChildren +
        item.quantityBaby * item.priceNewBaby
      );
    }, 0) || 0;
  const discount = 0;
  const total = subTotal - discount;

  return (
    <>
      <div className="mx-auto w-full lg:w-[902px]">
        <div className="mb-[30px] rounded-2xl bg-white px-4 py-5 shadow-md sm:py-8">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-2">
            <h2 className="text-travel-primary text-[16px] font-semibold capitalize sm:text-[20px]">
              Giỏ Hàng
            </h2>
            <Link
              href={`/`}
              className="hover:text-travel-primary flex items-center gap-1 text-xs font-normal text-[#52575C] transition-all duration-300 sm:text-sm"
            >
              Quay lại mua hàng
              <FaChevronRight className="size-3 text-[#52575C]" />
            </Link>
          </div>

          {cartDetail && cartDetail.length > 0 ? (
            <>
              <div className="mb-4 flex flex-col gap-4">
                {cartDetail.map((item) => (
                  <div
                    key={item.tourId}
                    className="border-travel-secondary/10 flex flex-wrap border-b border-dashed pb-4"
                  >
                    <div className="mb-2.5 flex w-full flex-row-reverse items-center justify-between gap-8 lg:mr-2.5 lg:mb-0 lg:w-auto lg:flex-col lg:justify-start">
                      <button onClick={() => removeFromCart(item.tourId)}>
                        <FaXmark className="size-4 cursor-pointer text-[#828282] transition-all duration-300 hover:text-[#DA0808]" />
                      </button>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="checkbox checkbox-primary"
                      />
                    </div>

                    <div className="mb-2.5 flex items-start gap-2.5 sm:gap-4 lg:mb-0">
                      <div className="border-travel-secondary/10 aspect-[118/100] w-[118px] overflow-hidden rounded-md border lg:aspect-[150/120] lg:w-[150px]">
                        <img
                          src={
                            item.avatar ||
                            "https://placehold.co/1x1/white/black?text=No+Image"
                          }
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="w-full flex-1 lg:w-[280px] lg:flex-none">
                        <Link
                          href={`/tour/detail/${item.slug}`}
                          className="text-travel-secondary hover:text-travel-primary mb-1.5 line-clamp-2 text-sm font-medium transition-all duration-300 sm:mb-3 sm:text-[16px]"
                        >
                          {item.name}
                        </Link>
                        <div className="text-travel-gray-900 flex flex-col gap-1 text-xs sm:text-sm">
                          <div className="">
                            Ngày Khởi Hành: <b>{item.departureDateFormat}</b>
                          </div>
                          <div className="">
                            Khởi Hành Tại:{" "}
                            <b>
                              {item.locationsFromName
                                .map((item) => item.name)
                                .join(", ")}
                            </b>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 lg:ml-2.5">
                      <label
                        htmlFor="Quantity"
                        className="text-travel-secondary mb-2 block text-sm font-normal lg:text-right"
                      >
                        Số Lượng Hành Khách
                      </label>
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center">
                          <label
                            htmlFor="Quantity Adult"
                            className="text-travel-secondary inline-block w-20 text-sm font-normal"
                          >
                            Người lớn:
                          </label>
                          <CounterInput
                            min={1}
                            max={item.stockAdult}
                            value={quantities[item.tourId]?.inputAdult ?? ""}
                            setQuantity={(val) => {
                              setQuantities((prev) => ({
                                ...prev,
                                [item.tourId]: {
                                  ...prev[item.tourId],
                                  quantityAdult: Number(val),
                                  inputAdult: String(val),
                                },
                              }));
                              updateCartItem({
                                tourId: item.tourId,
                                quantityAdult: Number(val),
                                quantityChildren:
                                  quantities[item.tourId]?.quantityChildren ||
                                  0,
                                quantityBaby:
                                  quantities[item.tourId]?.quantityBaby || 0,
                              });
                            }}
                            setInput={(val) =>
                              setQuantities((prev) => ({
                                ...prev,
                                [item.tourId]: {
                                  ...prev[item.tourId],
                                  inputAdult: String(val),
                                },
                              }))
                            }
                          />
                          <div className="text-travel-gray-900 flex-1 text-right">
                            <span className="text-travel-primary text-sm font-semibold sm:text-[16px]">
                              {item.priceNewAdult.toLocaleString("vi-VN")}
                              <span className="underline">đ</span>
                            </span>
                            <span className="text-xs font-medium">
                              {" "}
                              / Khách
                            </span>
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
                            max={item.stockChildren}
                            value={quantities[item.tourId]?.inputChildren ?? ""}
                            setQuantity={(val) => {
                              setQuantities((prev) => ({
                                ...prev,
                                [item.tourId]: {
                                  ...prev[item.tourId],
                                  quantityChildren: Number(val),
                                  inputChildren: String(val),
                                },
                              }));
                              updateCartItem({
                                tourId: item.tourId,
                                quantityAdult:
                                  quantities[item.tourId].quantityAdult || 0,
                                quantityChildren: Number(val),
                                quantityBaby:
                                  quantities[item.tourId].quantityBaby || 0,
                              });
                            }}
                            setInput={(val) =>
                              setQuantities((prev) => ({
                                ...prev,
                                [item.tourId]: {
                                  ...prev[item.tourId],
                                  inputChildren: String(val),
                                },
                              }))
                            }
                          />
                          <div className="text-travel-gray-900 flex-1 text-right">
                            <span className="text-travel-primary text-sm font-semibold sm:text-[16px]">
                              {item.priceNewChildren.toLocaleString("vi-VN")}
                              <span className="underline">đ</span>
                            </span>
                            <span className="text-xs font-medium">
                              {" "}
                              / Khách
                            </span>
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
                            max={item.stockBaby}
                            value={quantities[item.tourId]?.inputBaby ?? ""}
                            setQuantity={(val) => {
                              setQuantities((prev) => ({
                                ...prev,
                                [item.tourId]: {
                                  ...prev[item.tourId],
                                  quantityBaby: Number(val),
                                  inputBaby: String(val),
                                },
                              }));
                              updateCartItem({
                                tourId: item.tourId,
                                quantityAdult:
                                  quantities[item.tourId].quantityAdult || 0,
                                quantityChildren:
                                  quantities[item.tourId]?.quantityChildren ||
                                  0,
                                quantityBaby: Number(val),
                              });
                            }}
                            setInput={(val) =>
                              setQuantities((prev) => ({
                                ...prev,
                                [item.tourId]: {
                                  ...prev[item.tourId],
                                  inputBaby: String(val),
                                },
                              }))
                            }
                          />
                          <div className="text-travel-gray-900 flex-1 text-right">
                            <span className="text-travel-primary text-sm font-semibold sm:text-[16px]">
                              {item.priceNewBaby.toLocaleString("vi-VN")}
                              <span className="underline">đ</span>
                            </span>
                            <span className="text-xs font-medium">
                              {" "}
                              / Khách
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mb-4 flex items-center justify-end">
                <div className="flex w-full sm:w-[429px]">
                  <input
                    type="text"
                    placeholder="Nhập mã giảm giá"
                    className="text-travel-secondary border-travel-primary h-10 flex-1 rounded-tl-sm rounded-bl-sm border px-3 text-sm font-semibold"
                  />
                  <button className="bg-travel-primary h-10 w-[110px] cursor-pointer rounded-tr-sm rounded-br-sm text-sm font-normal text-white capitalize">
                    Dùng Mã
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-2 sm:gap-4">
                <div className="text-travel-secondary flex items-center justify-between font-normal">
                  <div className="text-sm">Tạm tính: </div>
                  <div className="text-[16px]">
                    {subTotal.toLocaleString("vi-VN")}đ
                  </div>
                </div>
                <div className="text-travel-secondary flex items-center justify-between font-normal">
                  <div className="text-sm">Giảm: </div>
                  <div className="">{discount.toLocaleString("vi-VN")}đ</div>
                </div>
                <div className="text-travel-secondary flex items-center justify-between">
                  <div className="text-sm">Thanh toán: </div>
                  <div className="text-travel-primary text-[22px] font-bold">
                    {total.toLocaleString("vi-VN")}đ
                  </div>
                </div>
              </div>
            </>
          ) : (
            <EmptyCart />
          )}
        </div>

        {cartDetail && cartDetail.length > 0 && <BookingForm />}
      </div>
    </>
  );
};
