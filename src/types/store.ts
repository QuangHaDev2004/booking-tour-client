export type CartItem = {
  tourId: string;
  quantityAdult: number;
  quantityChildren: number;
  quantityBaby: number;
};

export type CartStore = {
  cart: CartItem[];

  addToCart: (tour: CartItem) => void;
  updateCartItem: (tour: CartItem) => void;
  removeFromCart: (id: string) => void;
};

export type CartDetail = {
  tourId: string;
  quantityAdult: number;
  quantityChildren: number;
  quantityBaby: number;
  avatar: string;
  name: string;
  locationsFromName: { _id: string; name: string }[];
  departureDateFormat: string;
  stockAdult: number;
  stockChildren: number;
  stockBaby: number;
  priceNewAdult: number;
  priceNewChildren: number;
  priceNewBaby: number;
  slug: string;
};
