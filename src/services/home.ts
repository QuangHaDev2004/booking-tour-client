import { api } from "@/libs/axios";

export const getWebsiteInfo = async () => {
  const res = await api.get("/website-info");
  return res.data;
};

export const getCategoryList = async () => {
  const res = await api.get("/category");
  return res.data;
};
