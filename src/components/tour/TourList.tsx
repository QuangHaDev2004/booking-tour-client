import { ButtonViewAll } from "../button/ButtonViewAll";
import { Title } from "../title/Title";
import { TourItem } from "./TourItem";

export const TourList = ({ title, href }: { title: string; href: string }) => {
  return (
    <div className="pb-[45px] sm:pb-[60px]">
      <div className="container">
        <Title title={title} />
        <div className="mb-[25px] grid grid-cols-1 gap-2.5 sm:mb-[30px] sm:gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <TourItem />
          <TourItem />
          <TourItem />
          <TourItem />
          <TourItem />
          <TourItem />
          <TourItem />
          <TourItem />
        </div>
        <ButtonViewAll href={href} />
      </div>
    </div>
  );
};
