import { getWebsiteInfo } from "@/services/home";
import { WebsiteInfoDetail } from "@/types/home";
import { useQuery } from "@tanstack/react-query";

export const useWebsiteInfo = () => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["websiteInfo"],
    queryFn: getWebsiteInfo,
  });

  const websiteInfo: WebsiteInfoDetail = data?.websiteInfo ?? {};

  return {
    websiteInfo,
    isError,
    isPending,
  };
};
