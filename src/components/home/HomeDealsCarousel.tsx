/* eslint-disable @next/next/no-img-element */
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Title } from "../title/Title";
import { useClientReady } from "@/hooks/useClientReady";
import { Spinner } from "../loading/Spinner";

const images = [
  "/assets/images/deal-carousel-1.jpg",
  "/assets/images/deal-carousel-2.jpg",
  "/assets/images/deal-carousel-3.jpg",
  "/assets/images/deal-carousel-4.jpg",
  "/assets/images/deal-carousel-5.jpg",
  "/assets/images/deal-carousel-6.jpg",
];

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
            {images.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="aspect-[382/269] overflow-hidden rounded-lg">
                  <img
                    src={item}
                    alt={item}
                    className="h-full w-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="h-[316px]">
            <Spinner />
          </div>
        )}
      </div>
    </div>
  );
};
