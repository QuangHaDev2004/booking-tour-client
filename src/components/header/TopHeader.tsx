import { WebsiteInfo } from "@/types/home";
import { FaBuilding, FaEnvelope, FaPhone } from "react-icons/fa6";

export const TopHeader = ({ websiteInfo }: { websiteInfo: WebsiteInfo }) => {
  return (
    <div className="bg-travel-primary hidden py-3 text-[#FFFBEB] md:block">
      <div className="container">
        <div className="flex items-center justify-end gap-10">
          {websiteInfo.phone && (
            <div className="flex items-center gap-2">
              <FaPhone className="text-xl" />
              <span className="text-sm font-normal">{websiteInfo.phone}</span>
            </div>
          )}
          {websiteInfo.email && (
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-xl" />
              <span className="text-sm font-normal">{websiteInfo.email}</span>
            </div>
          )}
          {websiteInfo.address && (
            <div className="flex items-center gap-2">
              <FaBuilding className="text-xl" />
              <span className="text-sm font-normal">{websiteInfo.address}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
