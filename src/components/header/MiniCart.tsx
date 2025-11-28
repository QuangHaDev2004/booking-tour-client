/* eslint-disable @next/next/no-img-element */
import { useCartStore } from "@/store/useCartStore";
import Link from "next/link";

export const MiniCart = () => {
  const { cart } = useCartStore();

  return (
    <>
      <Link href={"/cart"} className="inline-flex items-center gap-1">
        <img
          src="/assets/images/icon-cart.svg"
          alt="Giỏ hàng"
          className="h-[26px] w-[26px]"
        />
        <span
          style={{ boxShadow: "2px 2px 7px 0px #00000014" }}
          className="icon-cart relative inline-block rounded-[3px] bg-[#FF3904] px-1.5 text-[10px] font-normal text-white"
        >
          {cart.length}
        </span>
      </Link>
    </>
  );
};
