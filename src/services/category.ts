export const getCategoryDetail = async (slug: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/category/${slug}`,
  );
  const data = await res.json();
  return data;
};
