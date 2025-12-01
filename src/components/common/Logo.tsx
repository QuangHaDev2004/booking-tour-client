/* eslint-disable @next/next/no-img-element */
import { WebsiteInfo } from "@/types/home";
import Link from "next/link";

export const Logo = ({ websiteInfo }: { websiteInfo: WebsiteInfo }) => {
  return (
    <Link href={"/"} className="flex items-center justify-center gap-3">
      <img
        src={websiteInfo.logo}
        alt={websiteInfo.websiteName}
        className="h-10 sm:h-[50px] w-auto"
      />
      <p className="text-travel-primary text-[20px] sm:text-2xl font-extrabold uppercase">
        {websiteInfo.websiteName}
      </p>
    </Link>
  );
};
