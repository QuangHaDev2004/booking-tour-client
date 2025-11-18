/* eslint-disable @next/next/no-img-element */
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Title } from "../title/Title";
import { useClientReady } from "@/hooks/useClientReady";

export const HomeDealsCarousel = () => {
  const { isReady } = useClientReady();

  return (
    <div className="pb-[15px] sm:pb-[30px]">
      <div className="container">
        <Title title="Khuyến Mại Bùng Nổ - Đánh Tan Nóng Bức" />
        {isReady ? (
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
            {Array(6)
              .fill("")
              .map((_, index) => (
                <SwiperSlide key={index}>
                  <div className="aspect-[382/269] overflow-hidden rounded-lg">
                    <img
                      src="/assets/images/section-3-1.jpg"
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        ) : (
          <div className="h-[269px]"></div>
        )}
      </div>
    </div>
  );
};
