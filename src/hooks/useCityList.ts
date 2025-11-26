import { getCityList } from "@/services/city";
import { CityItem } from "@/types/city";
import { useQuery } from "@tanstack/react-query";

export const useCityList = () => {
  const { data } = useQuery({
    queryKey: ["cityList"],
    queryFn: getCityList,
  });

  const cityList: CityItem[] = data?.cityList ?? [];

  return {
    cityList,
  };
};
