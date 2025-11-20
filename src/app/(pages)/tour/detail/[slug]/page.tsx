import { BreadCrumb } from "@/components/breadcrumb/BreadCrumb";
import { BoxImages } from "./BoxImages";
import { ProgramHighlight } from "./ProgramHighlight";
import { TourSchedule } from "./TourSchedule";
import { YourTrip } from "./YourTrip";

export default function TourDetail() {
  return (
    <>
      <BreadCrumb />

      <div className="py-[45px] sm:py-[60px]">
        <div className="container">
          <div className="flex flex-wrap gap-5 lg:flex-nowrap">
            {/* Left */}
            <div className="order-1 w-full lg:order-none lg:w-[58.7%]">
              <BoxImages />
              <ProgramHighlight />
              <TourSchedule />
            </div>

            {/* Right */}
            <div className="w-full flex-none lg:flex-1">
              <YourTrip />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
