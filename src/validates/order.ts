import { z } from "zod";

export const orderSchema = z.object({
  fullName: z.string().min(1, "Vui lòng nhập họ tên!"),
  phone: z
    .string()
    .min(1, "Vui lòng nhập số điện thoại!")
    .regex(
      /^(0|\+84)(3[2-9]|5[6|8|9]|7[0|6-9]|8[1-6|8|9]|9[0-9])[0-9]{7}$/,
      "Số điện thoại không đúng định dạng!",
    ),
  note: z.string().optional(),
  paymentMethod: z.string(),
});

export type OrderInputs = z.infer<typeof orderSchema>;
