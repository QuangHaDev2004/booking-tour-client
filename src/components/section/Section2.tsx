"use client";

import { ClockCountdown } from "../countdown/ClockCountdown";
import { TourItem } from "../tours/TourItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

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
          <div className="w-full md:w-1/2 lg:w-[68%] xl:w-3/4">
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              modules={[Autoplay]}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              breakpoints={{
                992: { slidesPerView: 2 },
                1200: { slidesPerView: 3 },
              }}
            >
              <SwiperSlide>
                <TourItem />
              </SwiperSlide>
              <SwiperSlide>
                <TourItem />
              </SwiperSlide>
              <SwiperSlide>
                <TourItem />
              </SwiperSlide>
              <SwiperSlide>
                <TourItem />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
