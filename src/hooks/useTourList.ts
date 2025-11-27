import { getCategoryDetail } from "@/services/category";
import { TourItem } from "@/types/tour";
import { useQuery } from "@tanstack/react-query";

export const useTourList = ({ slug }: { slug: string }) => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["tourList"],
    queryFn: () => getCategoryDetail(slug),
  });

  const tourList: TourItem[] = data?.tourList ?? [];

  return {
    tourList,
    isPending,
    isError,
  };
};
