/* eslint-disable @next/next/no-img-element */
import { ButtonViewAll } from "@/components/button/ButtonViewAll";
import Section2 from "@/components/section/Section2";
import { Section3 } from "@/components/section/Section3";
import { Title } from "@/components/title/Title";
import { TourItem } from "@/components/tours/TourItem";
import { Section8 } from "@/components/section/Section8";
import { HomeBanner } from "@/components/home/HomeBanner";

export default function HomePage() {
  return (
    <>
      <HomeBanner />

      {/* Section 2 */}
      <Section2 />

      {/* Section 3 */}
      <Section3 />

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
