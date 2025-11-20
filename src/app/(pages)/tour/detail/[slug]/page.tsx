import { BoxImages } from "./BoxImages";
import { ProgramHighlight } from "./ProgramHighlight";
import { TourSchedule } from "./TourSchedule";
import { YourTrip } from "./YourTrip";

export default function TourDetail() {
  return (
    <>
      <div className="py-[45px] sm:py-[60px]">
        <div className="container">
          <div className="flex gap-5 lg:flex-nowrap flex-wrap">
            {/* Left */}
            <div className="w-full lg:w-[58.7%] lg:order-none order-1">
              <BoxImages />
              <ProgramHighlight />
              <TourSchedule />
            </div>

            {/* Right */}
            <div className="flex-none w-full lg:flex-1">
              <YourTrip />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
