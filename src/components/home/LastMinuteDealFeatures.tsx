"use client";
import { TourItem } from "../tour/TourItem";
import { useClientReady } from "@/hooks/useClientReady";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { TourDetail } from "@/types/tour";

export const LastMinuteDealFeatures = ({
  tourListDeal,
}: {
  tourListDeal: TourDetail[];
}) => {
  const { isReady } = useClientReady();

  if (!isReady) return <div className="h-[435px]"></div>;

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
            <TourItem item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
