/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { FreeMode, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

export const BoxImages = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <>
      <div className="mb-[30px]">
        <div className="mb-[30px]">
          {/* Image Main */}
          <Swiper
            loop={true}
            spaceBetween={10}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Thumbs]}
            className="overflow-hidden rounded-[10px]"
          >
            <SwiperSlide>
              <div className="aspect-[695/480] overflow-hidden rounded-[10px]">
                <img
                  src="/assets/images/box-images-demo.jpg"
                  alt=""
                  className="h-full w-full cursor-pointer object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="aspect-[695/480] overflow-hidden rounded-[10px]">
                <img
                  src="/assets/images/box-images-demo.jpg"
                  alt=""
                  className="h-full w-full cursor-pointer object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="aspect-[695/480] overflow-hidden rounded-[10px]">
                <img
                  src="/assets/images/box-images-demo.jpg"
                  alt=""
                  className="h-full w-full cursor-pointer object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="aspect-[695/480] overflow-hidden rounded-[10px]">
                <img
                  src="/assets/images/box-images-demo.jpg"
                  alt=""
                  className="h-full w-full cursor-pointer object-cover"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Image Thumb */}
        <div>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Thumbs]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="aspect-[166/129] overflow-hidden rounded-[10px]">
                <img
                  src="/assets/images/box-images-demo.jpg"
                  alt=""
                  className="h-full w-full cursor-pointer object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="aspect-[166/129] overflow-hidden rounded-[10px]">
                <img
                  src="/assets/images/box-images-demo.jpg"
                  alt=""
                  className="h-full w-full cursor-pointer object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="aspect-[166/129] overflow-hidden rounded-[10px]">
                <img
                  src="/assets/images/box-images-demo.jpg"
                  alt=""
                  className="h-full w-full cursor-pointer object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="aspect-[166/129] overflow-hidden rounded-[10px]">
                <img
                  src="/assets/images/box-images-demo.jpg"
                  alt=""
                  className="h-full w-full cursor-pointer object-cover"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};
