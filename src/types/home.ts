export type WebsiteInfo = {
  websiteName: string;
  phone: string;
  email: string;
  address: string;
  facebook: string;
  zalo: string;
  logo: string;
  favicon: string;
};

export type CategoryTree = {
  id: string;
  name: string;
  slug: string;
  children: CategoryTree[];
};
