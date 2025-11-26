export type TourDetail = {
  id: string;
  name: string;
  avatar: string;
  time: string;
  slug: string;
  priceNewAdult: number;
  departureDateFormat: string;
  locationsFromName: {
    _id: string;
    name: string;
  }[];
  discount: string;
};
