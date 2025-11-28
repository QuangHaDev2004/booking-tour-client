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
              quantityAdult: tour.quantityAdult,
              quantityChildren: tour.quantityChildren,
              quantityBaby: tour.quantityBaby,
            };
            return { cart: newCart };
          }

          return { cart: [...state.cart, tour] };
        }),

      updateCartItem: (tour) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.tourId === tour.tourId
              ? {
                  ...item,
                  quantityAdult: tour.quantityAdult,
                  quantityChildren: tour.quantityChildren,
                  quantityBaby: tour.quantityBaby,
                }
              : item,
          ),
        })),

      removeFromCart: (id) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.tourId !== id),
        })),

      checkCartItem: (id, checked) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.tourId === id ? { ...item, checked } : item,
          ),
        })),
    }),
    { name: "travel-cart" },
  ),
);
