type CartItem = {
  tourId: string;
  stockAdult: number;
  stockChildren: number;
  stockBaby: number;
};

export type CartStore = {
  cart: CartItem[];
  addToCart: (tour: CartItem) => void;
};
