import { z } from "zod";

export const sendMailSchema = z.object({
  email: z
    .string()
    .min(1, "Vui lòng nhập email của bạn!")
    .email("Email không đúng định dạng!"),
});

export type SendMailInputs = z.infer<typeof sendMailSchema>;
