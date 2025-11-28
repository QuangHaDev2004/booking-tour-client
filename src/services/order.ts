import { api } from "@/libs/axios";
import { CartItem } from "@/types/store";

export const createOrder = async (dataFinal: {
  items: CartItem[];
  fullName: string;
  phone: string;
  paymentMethod: string;
  note?: string | undefined;
}) => {
  const res = await api.post("/order/create", dataFinal);
  return res.data;
};
