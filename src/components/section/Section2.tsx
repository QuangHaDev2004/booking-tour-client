"use client";
import dynamic from "next/dynamic";
import { ClockCountdown } from "../countdown/ClockCountdown";
import { Spinner } from "../loading/Spinner";

const TourFeature = dynamic(() => import("@/components/tours/TourFeature"), {
  ssr: false,
  loading: () => <Spinner />,
});

export default function Section2() {
  return (
    <div className="py-[45px] sm:py-[60px]">
      <div className="container">
        <div
          style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
          className="bg-primary flex flex-wrap gap-8 rounded-[10px] px-[15px] py-[30px] sm:p-8"
        >
          {/* Info */}
          <div className="w-full text-center text-white md:w-[calc(50%-32px)] lg:w-[calc(32%-32px)] xl:w-[calc(25%-32px)]">
            <h2 className="mb-2.5 text-[28px] font-bold uppercase sm:mt-6">
              ƯU ĐÃI 2025 TOUR GIỜ CHÓT
            </h2>
            <p className="mb-9 text-xs font-normal">
              Chuyến đi trong mơ đang chờ bạn, ưu đãi đặc biệt cho những ai đặt
              sớm hôm nay!
            </p>
            <div className="mb-4 text-[20px] font-bold">Kết thúc sau</div>
            <ClockCountdown expireDate="2025-12-01T00:00:00" />
            <div className="text-[16px] font-bold uppercase">GIẢM ĐẾN</div>
            <div className="text-yellow text-[40px] font-bold">
              <span>990.000</span>
              <span className="underline">đ</span>
            </div>
          </div>

          {/* Features Tour */}
          <TourFeature />
        </div>
      </div>
    </div>
  );
}
