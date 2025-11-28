import { api } from "@/libs/axios";
import { CartItem } from "@/types/store";

export const getCartDetail = async (dataFinal: CartItem[]) => {
  const res = await api.post("/cart/detail", dataFinal);
  return res.data;
};
