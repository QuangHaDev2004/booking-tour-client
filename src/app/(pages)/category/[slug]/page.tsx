/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { FaAnglesRight } from "react-icons/fa6";

export default function TourList() {
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
            <h1 className="mb-2 text-[20px] sm:text-[32px] font-medium text-white capitalize">
              Tour Nước Ngoài
            </h1>
            <nav className="flex flex-wrap items-center gap-x-2.5 sm:gap-x-4 gap-y-[5px] text-[11px] sm:text-[16px] font-normal text-white">
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
    </>
  );
}
