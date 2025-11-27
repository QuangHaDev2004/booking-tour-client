import { TourItem } from "@/types/tour";
import { ButtonViewAll } from "../button/ButtonViewAll";
import { Title } from "../title/Title";
import { TourCard } from "./TourCart";
import { CategoryDetail } from "@/types/category";

export const TourList = ({
  category,
  tour,
}: {
  category: CategoryDetail;
  tour: TourItem[];
}) => {
  return (
    <div className="pb-[45px] sm:pb-[60px]">
      <div className="container">
        {category && category.name && <Title title={category.name} />}
        {tour && tour.length > 0 && (
          <>
            <div className="mb-[25px] grid grid-cols-1 gap-2.5 sm:mb-[30px] sm:gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {tour.map((item) => (
                <TourCard key={item.id} item={item} />
              ))}
            </div>
            <ButtonViewAll href={`/category/${category.slug}`} />
          </>
        )}
      </div>
    </div>
  );
};
