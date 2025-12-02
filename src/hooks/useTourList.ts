import { getCategoryTourList } from "@/services/category";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export const useCategoryTourList = ({ slug }: { slug: string }) => {
  return useQuery({
    queryKey: ["categoryTourList", slug],
    queryFn: () => getCategoryTourList(slug),
    enabled: !!slug,
    placeholderData: keepPreviousData,
  });
};
