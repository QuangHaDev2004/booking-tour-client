/* eslint-disable @next/next/no-img-element */

"use client";
import Link from "next/link";
import {
  FaBars,
  FaBuilding,
  FaCaretDown,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa6";

export const Header = () => {
  return (
    <>
      {/* Top Header */}
      <div className="bg-travel-primary hidden py-3 text-[#FFFBEB] md:block">
        <div className="container">
          <div className="flex items-center justify-end gap-10">
            <div className="flex items-center gap-2">
              <FaPhone className="text-xl" />
              <span className="text-sm font-normal">0123.456.789</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-xl" />
              <span className="text-sm font-normal">contact@28travel.com</span>
            </div>
            <div className="flex items-center gap-2">
              <FaBuilding className="text-xl" />
              <span className="text-sm font-normal">
                Số 123, đường ABC, thành phố XYZ
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 right-0 left-0 z-[900] bg-white py-3 shadow-md">
        <div className="container">
          <div className="flex items-center justify-between">
            {/* Button Mobile */}
            <button className="block cursor-pointer lg:hidden">
              <FaBars className="text-travel-secondary text-2xl" />
            </button>

            {/* Logo */}
            <Link href={"/"}>
              <img
                src="/assets/images/Logo.svg"
                alt="HW Tour Logo"
                className="h-[50px] w-auto"
              />
            </Link>

            {/* Menu */}
            <nav className="hidden lg:block">
              <ul className="flex gap-6 xl:gap-10">
                <li>
                  <Link
                    href=""
                    className="text-travel-secondary text-[16px] font-medium capitalize"
                  >
                    Trang Chủ
                  </Link>
                </li>
                <li className="group/sub-1 relative flex items-center gap-1.5">
                  <Link
                    href=""
                    className="text-travel-secondary text-[16px] font-medium capitalize"
                  >
                    Tour Trong Nước
                  </Link>
                  <FaCaretDown className="text-sm" />
                  <ul className="invisible absolute top-full left-0 w-[280px] translate-y-2 rounded-br-lg rounded-bl-lg bg-white py-2 opacity-0 shadow-md transition-all duration-300 group-hover/sub-1:visible group-hover/sub-1:translate-y-0 group-hover/sub-1:opacity-100">
                    <li>
                      <Link
                        href={""}
                        className="text-travel-primary hover:bg-travel-primary block px-[22px] py-2 text-[16px] font-normal capitalize transition-all duration-300 hover:text-white"
                      >
                        Tour Miền Bắc
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={""}
                        className="text-travel-primary hover:bg-travel-primary block px-[22px] py-2 text-[16px] font-normal capitalize transition-all duration-300 hover:text-white"
                      >
                        Tour Miền Trung
                      </Link>
                    </li>

                    <li>
                      <Link
                        href={""}
                        className="text-travel-primary hover:bg-travel-primary block px-[22px] py-2 text-[16px] font-normal capitalize transition-all duration-300 hover:text-white"
                      >
                        Tour Miền Nam
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={""}
                        className="text-travel-primary hover:bg-travel-primary block px-[22px] py-2 text-[16px] font-normal capitalize transition-all duration-300 hover:text-white"
                      >
                        Tour Xuyên Việt
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="flex items-center gap-1.5">
                  <Link
                    href=""
                    className="text-travel-secondary text-[16px] font-medium capitalize"
                  >
                    Tour Nước Ngoài
                  </Link>
                  <FaCaretDown className="text-sm" />
                </li>
                <li>
                  <Link
                    href=""
                    className="text-travel-secondary text-[16px] font-medium capitalize"
                  >
                    Tin Tức
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className="text-travel-secondary text-[16px] font-medium capitalize"
                  >
                    Liên Hệ
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Cart */}
            <Link href={""} className="inline-flex items-center gap-1">
              <img
                src="/assets/images/icon-cart.svg"
                alt="Giỏ hàng"
                className="h-[26px] w-[26px]"
              />
              <span
                style={{ boxShadow: "2px 2px 7px 0px #00000014" }}
                className="icon-cart relative inline-block rounded-[3px] bg-[#FF3904] px-1.5 text-[10px] font-normal text-white"
              >
                1
              </span>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};
