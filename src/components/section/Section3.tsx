/* eslint-disable @next/next/no-img-element */

"use client";
import { Title } from "../title/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export const Section3 = () => {
  return (
    <div className="pb-[15px] sm:pb-[30px]">
      <div className="container">
        <Title title="Khuyến Mại Bùng Nổ - Đánh Tan Nóng Bức" />
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            576: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
          className="swiperSection3"
        >
          <SwiperSlide>
            <div className="aspect-[382/269] overflow-hidden rounded-[10px]">
              <img
                src="/assets/images/section-3-1.jpg"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="aspect-[382/269] overflow-hidden rounded-[10px]">
              <img
                src="/assets/images/section-3-1.jpg"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="aspect-[382/269] overflow-hidden rounded-[10px]">
              <img
                src="/assets/images/section-3-1.jpg"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="aspect-[382/269] overflow-hidden rounded-[10px]">
              <img
                src="/assets/images/section-3-1.jpg"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
