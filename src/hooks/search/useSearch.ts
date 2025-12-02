import { useSearchParams } from "next/navigation";
import { getSearchResults } from "@/services/search";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export const useSearch = () => {
  const searchParams = useSearchParams();

  const params: Record<string, string> = {};
  searchParams.forEach((value, key) => {
    if (value) params[key] = value;
  });

  return useQuery({
    queryKey: ["search", params],
    queryFn: () => getSearchResults(params),
    enabled: !!params,
    placeholderData: keepPreviousData,
  });
};
