import { TourItem } from "@/components/tour/TourItem";
import { FaAnglesLeft, FaAnglesRight, FaFilter } from "react-icons/fa6";

export const TourList = ({
  setFilterActive,
}: {
  setFilterActive: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <>
      <div className="flex-1">
        <h2 className="text-travel-primary mb-2.5 text-2xl font-semibold capitalize sm:text-[28px]">
          Tour Nước Ngoài
        </h2>
        <p className="text-travel-gray-900 mb-2.5 text-justify text-sm font-normal sm:mb-4">
          Du lịch Châu Á: là châu lục lớn và đông dân nhất thế giới. Châu Á cũng
          có nhiều danh lam thắng cảnh đẹp tại một số quốc gia như Hàn Quốc,
          Nhật Bản, Trung Quốc, Việt Nam,... và VK Travel là nhà tổ chức du lịch
          chuyên nghiệp hàng đầu Châu Á, đã 5 lần liên tiếp nhận giải TTG Travel
          Awards. Hãy cùng 28.Travel du lịch Châu Á để tận hưởng những dịch vụ
          tốt nhất.
        </p>

        <div className="mb-4 flex flex-wrap items-center justify-between gap-2.5 sm:mb-[30px] sm:gap-4">
          <div className="flex w-full flex-wrap items-center gap-4 lg:w-auto">
            <span className="text-travel-gray-900 text-sm font-semibold">
              Sắp xếp theo:
            </span>
            <select className="select border-travel-primary w-[240px] rounded-4xl border bg-white px-4 text-sm font-medium sm:w-[280px]">
              <option className="rounded-sm py-2">Tất cả</option>
              <option className="rounded-sm py-2">Giá tăng dần</option>
              <option className="rounded-sm py-2">Giá giảm dần</option>
              <option className="rounded-sm py-2">
                Ngày khởi hành gần nhất
              </option>
            </select>
          </div>
          <div className="text-travel-gray-900 text-sm font-normal">
            <span>Tất cả: </span>
            <span className="text-travel-primary text-[16px] font-bold">
              38 tour
            </span>
          </div>

          {/* Button Filter Mobile */}
          <button
            onClick={() => setFilterActive(true)}
            className="flex cursor-pointer items-center gap-2 lg:hidden"
          >
            <div className="text-travel-primary text-sm font-semibold sm:text-lg">
              Bộ Lọc
            </div>
            <FaFilter className="text-travel-primary text-[16px] sm:text-[20px]" />
          </button>
        </div>

        <div className="mb-[30px] grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[20px]">
          <TourItem />
          <TourItem />
          <TourItem />
          <TourItem />
          <TourItem />
          <TourItem />
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-end">
          <div className="border-travel-primary flex h-10 w-10 cursor-pointer items-center justify-center rounded-tl-[5px] rounded-bl-[5px] border border-r-0">
            <FaAnglesLeft className="text-travel-primary text-xs" />
          </div>
          <div className="border-travel-primary text-travel-primary flex h-10 w-10 cursor-pointer items-center justify-center border border-r-0 text-sm">
            1
          </div>
          <div className="border-travel-primary text-travel-primary flex h-10 w-10 cursor-pointer items-center justify-center border border-r-0 text-sm">
            2
          </div>
          <div className="border-travel-primary text-travel-primary flex h-10 w-10 cursor-pointer items-center justify-center border border-r-0 text-sm">
            3
          </div>
          <div className="border-travel-primary text-travel-primary flex h-10 w-10 cursor-pointer items-center justify-center border border-r-0 text-sm">
            4
          </div>
          <div className="border-travel-primary flex h-10 w-10 cursor-pointer items-center justify-center rounded-tr-[5px] rounded-br-[5px] border">
            <FaAnglesRight className="text-travel-primary text-xs" />
          </div>
        </div>
      </div>
    </>
  );
};
