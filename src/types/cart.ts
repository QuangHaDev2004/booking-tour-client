export type QuantityState = {
  [tourId: string]: {
    quantityAdult: number;
    quantityChildren: number;
    quantityBaby: number;
    inputAdult: string;
    inputChildren: string;
    inputBaby: string;
  };
};
