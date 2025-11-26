"use client";
import { SendMailInputs, sendMailSchema } from "@/validates/contact";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateContact } from "@/hooks/contact/useCreateContact";

export const FormSendEmail = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<SendMailInputs>({
    resolver: zodResolver(sendMailSchema),
  });

  const { mutate, isPending } = useCreateContact({ reset });

  const handleSendMailForm: SubmitHandler<SendMailInputs> = (data) => {
    mutate(data);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(handleSendMailForm)}
        className="relative flex flex-1 flex-wrap items-center gap-3 rounded-[14px] bg-white p-3"
      >
        <input
          {...register("email")}
          type="email"
          placeholder="Nhập email của bạn..."
          className={`h-12 flex-1 rounded-lg border px-7 text-sm font-medium placeholder:text-[#99A2A5] ${errors.email ? "border-travel-red" : "border-[#99A2A5]"}`}
        />
        <button
          disabled={isPending}
          className="text-travel-primary border-travel-primary hover:bg-travel-primary w-full cursor-pointer rounded-lg border bg-transparent px-6 py-3 text-[16px] font-medium capitalize transition-all duration-300 hover:text-white hover:brightness-95 sm:w-auto"
        >
          Đăng Ký Ngay
        </button>
        {errors.email && (
          <p className="text-travel-red absolute top-full left-4 text-sm font-medium">
            {errors.email.message}
          </p>
        )}
      </form>
    </>
  );
};
