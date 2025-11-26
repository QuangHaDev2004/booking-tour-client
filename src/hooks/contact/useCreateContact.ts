import { createContact } from "@/services/contact";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { UseFormReset } from "react-hook-form";
import { toast } from "sonner";

export const useCreateContact = ({
  reset,
}: {
  reset: UseFormReset<{
    email: string;
  }>;
}) =>
  useMutation({
    mutationFn: createContact,
    onSuccess: (data) => {
      reset();
      toast.success(data.message);
    },
    onError: (errors: AxiosError<{ message: string }>) => {
      toast.error(errors?.response?.data?.message);
    },
  });
