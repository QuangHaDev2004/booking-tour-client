import { getCategoryList } from "@/services/home";
import { CategoryItem } from "@/types/home";
import { useQuery } from "@tanstack/react-query";

export const useCategoryList = () => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["categoryList"],
    queryFn: getCategoryList,
  });

  const categoryList: CategoryItem[] = data?.categoryList ?? {};

  return {
    categoryList,
    isError,
    isPending,
  };
};
