import { getCartDetail } from "@/services/cart";
import { CartDetail } from "@/types/store";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";

export const useCartDetail = ({
  setCartDetail,
}: {
  setCartDetail: React.Dispatch<React.SetStateAction<CartDetail[] | null>>;
}) => {
  const mutation = useMutation({
    mutationFn: getCartDetail,
    onSuccess: (data) => {
      setCartDetail(data.cart);
    },
    onError: (errors: AxiosError<{ message: string }>) => {
      toast.error(errors?.response?.data?.message);
    },
  });

  return mutation;
};
