import { getCategoryDetail } from "@/services/category";
import { TourDetail } from "@/types/tour";
import { useQuery } from "@tanstack/react-query";

export const useTourList = ({ slug }: { slug: string }) => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["tourList"],
    queryFn: () => getCategoryDetail(slug),
  });

  const tourList: TourDetail[] = data?.tourList ?? [];

  return {
    tourList,
    isPending,
    isError,
  };
};
