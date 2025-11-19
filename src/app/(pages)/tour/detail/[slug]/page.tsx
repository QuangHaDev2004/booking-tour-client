import { BoxImages } from "./BoxImages";
import { ProgramHighlight } from "./ProgramHighlight";
import { TourSchedule } from "./TourSchedule";

export default function TourDetail() {
  return (
    <>
      <div className="py-[45p] sm:py-[60px]">
        <div className="container">
          <div className="flex gap-5">
            {/* Left */}
            <div className="w-[58.7%]">
              <BoxImages />
              <ProgramHighlight />
              <TourSchedule />
            </div>

            {/* Right */}
            <div className="flex-1"></div>
          </div>
        </div>
      </div>
    </>
  );
}
