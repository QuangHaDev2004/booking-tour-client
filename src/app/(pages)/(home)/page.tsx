/* eslint-disable @next/next/no-img-element */
import { ButtonViewAll } from "@/components/button/ButtonViewAll";
import { FormSearch } from "./FormSearch";
import Section2 from "@/components/section/Section2";
import { Section3 } from "@/components/section/Section3";
import { Title } from "@/components/title/Title";
import { TourItem } from "@/components/tours/TourItem";
import { Section8 } from "@/components/section/Section8";

export default function Home() {
  return (
    <>
      {/* Section 1 */}
      <div className="bg-[url(/assets/images/bg-section-1.jpg)] bg-cover bg-center bg-no-repeat py-[107px]">
        <div className="container">
          <div className="mx-auto w-full lg:w-[768px]">
            <h1 className="text-primary mb-5 text-center text-[28px] font-bold md:text-[32px] lg:text-4xl">
              Du lịch Châu Á - Khám phá Mỹ, Úc, Âu Đi nơi đâu bạn muốn
            </h1>
            <p className="text-secondary mb-[30px] text-center text-sm font-normal lg:text-[16px]">
              Trải nghiệm hành trình đáng nhớ cùng chúng tôi – khám phá văn hoá,
              ẩm thực và cảnh đẹp khắp năm châu, mang đến kỳ nghỉ trọn vẹn cho
              bạn và gia đình.
            </p>
            <FormSearch />
          </div>
        </div>
      </div>

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
