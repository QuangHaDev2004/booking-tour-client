export type WebsiteInfoDetail = {
  websiteName: string;
  phone: string;
  email: string;
  address: string;
  facebook: string;
  zalo: string;
  logo: string;
  favicon: string;
};

export type CategoryItem = {
  id: string;
  name: string;
  slug: string;
  children: CategoryItem[];
};
