import { BoxImages } from "./BoxImages";
import { ProgramHighlight } from "./ProgramHighlight";

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
            </div>

            {/* Right */}
            <div className="flex-1"></div>
          </div>
        </div>
      </div>
    </>
  );
}
