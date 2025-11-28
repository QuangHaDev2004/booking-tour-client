export type CartItem = {
  tourId: string;
  quantityAdult: number;
  quantityChildren: number;
  quantityBaby: number;
  checked?: boolean;
};

export type CartStore = {
  cart: CartItem[];

  addToCart: (tour: CartItem) => void;
  updateCartItem: (tour: CartItem) => void;
  removeFromCart: (id: string) => void;
  checkCartItem: (id: string, checked: boolean) => void;
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
  checked: boolean;
};
