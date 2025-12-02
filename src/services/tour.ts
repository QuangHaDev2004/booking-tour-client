import { API_URL } from "@/config/api";
import { handleResponse } from "@/libs/api";

export const getTourDetail = async (slug: string) => {
  const res = await fetch(`${API_URL}/tour/detail/${slug}`);
  return handleResponse(res);
};
