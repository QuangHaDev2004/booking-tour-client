import { getCityList } from "@/services/city";
import { SearchContainer } from "./SearchContainer";

export default async function SearchPage() {
  const { cityList } = await getCityList();

  return (
    <>
      <SearchContainer cityList={cityList} />
    </>
  );
}
