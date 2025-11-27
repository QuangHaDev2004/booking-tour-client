import { CartStore } from "@/types/store";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      cart: [],

      addToCart: (tour) =>
        set((state) => {
          const idx = state.cart.findIndex(
            (item) => item.tourId === tour.tourId,
          );

          if (idx !== -1) {
            const newCart = [...state.cart];
            newCart[idx] = {
              ...newCart[idx],
              stockAdult: tour.stockAdult,
              stockChildren: tour.stockChildren,
              stockBaby: tour.stockBaby,
            };
            return { cart: newCart };
          }

          return { cart: [...state.cart, tour] };
        }),
    }),
    { name: "travel-cart" },
  ),
);
