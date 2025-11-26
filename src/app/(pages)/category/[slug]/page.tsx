import { BreadCrumb } from "@/components/breadcrumb/BreadCrumb";
import { CategoryContainer } from "./CategoryContainer";
import { getCategoryDetail } from "@/services/category";

export default async function TourList({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const { breadcrumb } = await getCategoryDetail(slug);

  return (
    <>
      <BreadCrumb breadcrumb={breadcrumb} />
      <CategoryContainer />
    </>
  );
}
