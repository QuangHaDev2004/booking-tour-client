"use client";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

export const ProgramHighlight = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mt-[30px] overflow-hidden rounded-lg bg-white p-5 shadow-md">
      <div className="text-travel-primary border-travel-gray-100/40 mb-4 border-b border-dashed pb-3 text-[20px] font-bold capitalize">
        Điểm nhấn của chương trình
      </div>
      <div className={`relative overflow-hidden ${!expanded && "max-h-52"}`}>
        Cố Cung Tử Cấm Thành biểu tượng bảo tàng cung điện lớn nhất thế giới Vạn
        Lý Trường Thành công trình kiến trúc lịch sử vĩ đại của nhân dân Trung
        Hoa, Thập Tam Lăng – Định Lăng địa cung lăng tẩm hoàng gia Minh – Thanh
        Di Hòa Viên Cung Điện Mùa Hè của Từ Hy Thái Hậu Phố Vương Phủ Tỉnh nơi
        hội tụ những điều xa hoa, lịch sử , văn hóa, ẩm thực tiêu biểu của Bắc
        Kinh niên đại hơn 1000 năm. Phố Tiền Môn trung tâm giải trí nổi tiếng
        đầu tiên tại Bắc Kinh với lịch sử hơn 570 năm Chùa Phật Ngọc linh thiêng
        nổi tiếng nhất tại Thượng Hải đời Tống. Bến Thượng Hải ngắm tháp truyền
        hình Minh Châu ĐôngPhương Phố thương mại Nam Kinh, check-in bên ngoài
        tòa nhà Tòa nhà Louis Vuitton kiến trúc độc đáo. Chu Gia Giác thủy trấn
        đẹp như tranh giữa lòng Thượng Hải có niên đại hơn 1700 năm Miếu Thành
        Hoàng + TTTM Miếu Thành Hoàng phố cổThượng Hải sầm uất, vẫn giữ được nét
        đẹp cổ kính với kiếntrúc đặc trưng của Trung Hoa.
        {!expanded && (
          <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-10 bg-gradient-to-t from-white"></div>
        )}
      </div>
      <button
        onClick={() => setExpanded(!expanded)}
        className="relative mt-2 flex w-full cursor-pointer items-center justify-between"
      >
        <span className="text-travel-primary text-sm font-bold">
          {expanded ? "Ẩn bớt" : "Xem thêm"}
        </span>
        <FaChevronDown
          className={`text-travel-primary size-3 transition-transform duration-300 ${expanded && "rotate-180"}`}
        />
      </button>
    </div>
  );
};
