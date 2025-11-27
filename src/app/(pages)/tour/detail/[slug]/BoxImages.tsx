/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { useClientReady } from "@/hooks/useClientReady";
import { Autoplay, FreeMode, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import { TourDetail } from "@/types/tour";

export const BoxImages = ({ tourDetail }: { tourDetail: TourDetail }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const { isReady } = useClientReady();

  return (
    <>
      {tourDetail?.images && tourDetail?.images.length > 0 && (
        <>
          <div className="mb-[30px]">
            <div className="mb-2 sm:mb-4">
              {/* Image Main */}
              <Swiper
                loop={tourDetail.images.length > 1}
                spaceBetween={10}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Thumbs, Autoplay]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                className="overflow-hidden rounded-[10px]"
              >
                {tourDetail.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="aspect-[695/480] overflow-hidden rounded-[10px]">
                      <img
                        src={image}
                        alt=""
                        className="h-full w-full cursor-pointer object-cover"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Image Thumb */}
            <div>
              <Swiper
                onSwiper={setThumbsSwiper}
                loop={tourDetail.images.length > 4}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Thumbs]}
                className="mySwiper"
                breakpoints={{
                  0: {
                    spaceBetween: 4,
                  },
                  576: {
                    spaceBetween: 10,
                  },
                }}
              >
                {isReady ? (
                  tourDetail.images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <div className="aspect-[695/480] overflow-hidden rounded-[10px]">
                        <img
                          src={image}
                          alt=""
                          className="h-full w-full cursor-pointer object-cover"
                        />
                      </div>
                    </SwiperSlide>
                  ))
                ) : (
                  <div className="h-[129px]"></div>
                )}
              </Swiper>
            </div>
          </div>
        </>
      )}
    </>
  );
};
