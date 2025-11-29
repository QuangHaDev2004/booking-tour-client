export type OrderDetail = {
  orderCode: string;
  fullName: string;
  phone: string;
  note: string;
  paymentMethodName: string;
  paymentStatusName: string;
  statusName: string;
  createdAtFormat: string;
  subTotal: number;
  discount: number;
  total: number;
  items: {
    tourId: string;
    priceNewAdult: number;
    priceNewBaby: number;
    priceNewChildren: number;
    quantityAdult: number;
    quantityBaby: number;
    quantityChildren: number;
    avatar: string;
    name: string;
    slug: string;
    departureDateFormat: string;
    locationsFromFormat: string;
  }[];
};
