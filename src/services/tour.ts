export const getTourDetail = async (slug: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/tour/detail/${slug}`,
  );
  const data = await res.json();
  return data;
};
