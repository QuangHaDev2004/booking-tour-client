/* eslint-disable @next/next/no-img-element */
import { ButtonViewAll } from "@/components/button/ButtonViewAll";
import { HomeDealsCarousel } from "@/components/home/HomeDealsCarousel";
import { Title } from "@/components/title/Title";
import { TourItem } from "@/components/tour/TourItem";
import { Section8 } from "@/components/section/Section8";
import { HomeBanner } from "@/components/home/HomeBanner";
import HomeLastMinuteDeals from "@/components/home/HomeLastMinuteDeals";

export default function HomePage() {
  return (
    <>
      <HomeBanner />
      <HomeLastMinuteDeals />
      <HomeDealsCarousel />

      {/* Section 4 */}
      <div className="pb-[45px] sm:pb-[60px]">
        <div className="container">
          <Title title="Tour Trong Nước" />
          <div className="mb-[25px] grid grid-cols-2 gap-2.5 sm:mb-[30px] sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
            <TourItem />
            <TourItem />
            <TourItem />
            <TourItem />
            <TourItem />
            <TourItem />
            <TourItem />
            <TourItem />
          </div>
          <ButtonViewAll />
        </div>
      </div>

      {/* Section 5 */}
      <div className="pb-[45px] sm:pb-[60px]">
        <div className="container">
          <div className="overflow-hidden rounded-[10px]">
            <img
              src="/assets/images/section-5.jpg"
              alt=""
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>

      {/* Section 6 */}
      <div className="pb-[45px] sm:pb-[60px]">
        <div className="container">
          <Title title="Tour Nước Ngoài" />
          <div className="mb-[25px] grid grid-cols-2 gap-2.5 sm:mb-[30px] sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
            <TourItem />
            <TourItem />
            <TourItem />
            <TourItem />
            <TourItem />
            <TourItem />
            <TourItem />
            <TourItem />
          </div>
          <ButtonViewAll />
        </div>
      </div>

      {/* Section 7 */}
      <div className="pb-[45px] sm:pb-[60px]">
        <div className="container">
          <div className="overflow-hidden rounded-[10px]">
            <img
              src="/assets/images/section-7.jpg"
              alt=""
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>

      {/* Section 8 */}
      <Section8 />
    </>
  );
}
