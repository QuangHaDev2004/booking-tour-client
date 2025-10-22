"use client";
import { TourItem } from "../tours/TourItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function TourFeature() {
  return (
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
  );
}
