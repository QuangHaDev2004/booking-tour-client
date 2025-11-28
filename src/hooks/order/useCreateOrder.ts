import { createOrder } from "@/services/order";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";

export const useCreateOrder = () => {
  const mutation = useMutation({
    mutationFn: createOrder,
    onSuccess: () => {},
    onError: (errors: AxiosError<{ message: string }>) => {
      toast.error(errors?.response?.data?.message);
    },
  });

  return mutation;
};
