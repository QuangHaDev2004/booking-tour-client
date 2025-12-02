"use client";
import { TourCard } from "../tour/TourCart";
import { useClientReady } from "@/hooks/useClientReady";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { TourItem } from "@/types/tour";

export const LastMinuteDealFeatures = ({
  tourListDeal,
}: {
  tourListDeal: TourItem[];
}) => {
  const { isReady } = useClientReady();

  if (!isReady)
    return (
      <div className="flex h-[435px] flex-1 flex-col items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-gray-400"></div>
        <div className="mt-2 font-medium text-white">Đang tải...</div>
      </div>
    );

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
        {tourListDeal.map((item) => (
          <SwiperSlide key={item.id}>
            <TourCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
