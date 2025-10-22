/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";

export const Footer = () => {
  return (
    <div className="rounded-tl-[25px] rounded-tr-[25px] bg-[#ECECEC] pt-10 pb-10 sm:rounded-tl-[40px] sm:rounded-tr-[40px] sm:pt-[60px]">
      <div className="container">
        <div className="flex flex-col gap-[30px] sm:gap-10">
          <div className="bg-primary flex flex-wrap items-center gap-5 sm:gap-6 rounded-2xl p-5 sm:p-8">
            <div className="w-full text-center text-lg font-bold text-[#FDFDFD] capitalize lg:w-[389px] lg:text-left lg:text-[20px]">
              Đăng ký ngay để không bỏ lỡ các chương trình của chúng tôi
            </div>
            <form
              action=""
              className="flex flex-1 items-center flex-wrap gap-3 rounded-[14px] bg-white p-3"
            >
              <input
                type="email"
                name=""
                id=""
                placeholder="Nhập email của bạn..."
                className="h-12 flex-1 rounded-lg border border-[#99A2A5] px-7 text-sm font-medium placeholder:text-[#99A2A5]"
              />
              <button className="bg-primary cursor-pointer rounded-lg px-6 py-3 text-[16px] font-medium text-[#FDFDFD] capitalize transition-all duration-300 hover:brightness-95 w-full sm:w-auto">
                Đăng Ký Ngay
              </button>
            </form>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-y-5 lg:justify-between">
            <nav>
              <ul className="text-secondary flex flex-wrap items-center justify-center gap-x-[25px] sm:gap-x-10 gap-y-2.5 text-sm font-medium">
                <li>
                  <Link
                    href={""}
                    className="hover:text-primary transition-all duration-300"
                  >
                    Trang Chủ
                  </Link>
                </li>
                <li>
                  <Link
                    href={""}
                    className="hover:text-primary transition-all duration-300"
                  >
                    Tour Trong Nước
                  </Link>
                </li>
                <li>
                  <Link
                    href={""}
                    className="hover:text-primary transition-all duration-300"
                  >
                    Tour Nước Ngoài
                  </Link>
                </li>
                <li>
                  <Link
                    href={""}
                    className="hover:text-primary transition-all duration-300"
                  >
                    Tin Tức
                  </Link>
                </li>
                <li>
                  <Link
                    href={""}
                    className="hover:text-primary transition-all duration-300"
                  >
                    Liên Hệ
                  </Link>
                </li>
              </ul>
            </nav>
            <nav>
              <ul className="flex items-center gap-[25px] sm:gap-10">
                <li>
                  <Link href={""} target="_blank">
                    <FaFacebook className="text-2xl text-[#1877F2]" />
                  </Link>
                </li>
                <li>
                  <Link href={""} target="_blank">
                    <FaTwitter className="text-2xl text-[#1DA1F2]" />
                  </Link>
                </li>
                <li>
                  <Link href={""} target="_blank">
                    <FaInstagram className="text-2xl text-[#E4405F]" />
                  </Link>
                </li>
                <li>
                  <Link href={""} target="_blank">
                    <FaYoutube className="text-2xl text-[#CD201F]" />
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <hr className="text-[#CCD1D2]" />
          <div className="flex flex-wrap items-center gap-y-5">
            <div className="order-1 w-full text-center text-[13px] font-medium text-[#667479] lg:order-none lg:w-[calc(50%-112px)] lg:text-left">
              © 2025 HWTour. All rights reserved.
            </div>
            <div className="w-full lg:w-[224px]">
              <img
                src="/assets/images/Logo.svg"
                alt=""
                className="h-[50px] w-full"
              />
            </div>
            <div className="flex w-full items-center justify-center gap-[25px] sm:gap-[30px] text-[13px] font-medium text-[#667479] lg:w-[calc(50%-112px)] lg:justify-end">
              <Link
                href={""}
                className="hover:text-primary transition-all duration-300"
              >
                Điều khoản dịch vụ
              </Link>
              <Link
                href={""}
                className="hover:text-primary transition-all duration-300"
              >
                Chính sách bảo mật
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
