import { FaBars } from "react-icons/fa6";
import { Logo } from "../common/Logo";
import { MiniCart } from "./MiniCart";
import { TopHeader } from "./TopHeader";
import { getCategoryTree } from "@/services/home";
import { WebsiteInfo } from "@/types/home";
import { HeaderMenu } from "./HeaderMenu";

export const Header = async ({ websiteInfo }: { websiteInfo: WebsiteInfo }) => {
  const { categoryTree } = await getCategoryTree();

  return (
    <>
      <TopHeader websiteInfo={websiteInfo} />

      <header className="sticky top-0 right-0 left-0 z-[900] bg-white py-3 shadow-md">
        <div className="container">
          <div className="flex items-center justify-between">
            <button className="block cursor-pointer lg:hidden">
              <FaBars className="text-travel-secondary text-[22px]" />
            </button>
            <Logo websiteInfo={websiteInfo} />
            <HeaderMenu categoryTree={categoryTree} />
            <MiniCart />
          </div>
        </div>
      </header>
    </>
  );
};
