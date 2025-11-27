import { getSearchResults } from "@/services/search";
import { TourItem } from "@/types/tour";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

export const useSearch = () => {
  const searchParams = useSearchParams();

  const params: Record<string, string> = {};
  searchParams.forEach((value, key) => {
    if (value) params[key] = value;
  });

  const { data, isPending, isError } = useQuery({
    queryKey: ["search", params],
    queryFn: () => getSearchResults(params),
  });

  const tourList: TourItem[] = data?.tourList ?? [];

  return {
    tourList,
    isPending,
    isError,
  };
};
