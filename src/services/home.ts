import { api } from "@/libs/axios";

export const getWebsiteInfo = async () => {
  const res = await api.get("/website-info");
  return res.data;
};

export const getCategoryList = async () => {
  const res = await api.get("/category");
  return res.data;
};

export const getLastMinuteDeals = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/deal`);
  const data = await res.json();
  return data;
};

export const getTourList = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tour/list`);
  const data = await res.json();
  return data;
};
