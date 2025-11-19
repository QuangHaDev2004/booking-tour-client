"use client";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

export const TourSchedule = () => {
  const schedules = [
    {
      title: "Ngày 01: TP.HỒ CHÍ MINH - HÀ NỘI - HÀ GIANG (Ăn trưa, chiều)",
      content:
        "Buổi sáng, quý khách tập trung tại nhà Ga mới T3 đi trong nước, cửa D5 – SB.Tân Sơn Nhất. HDV đón quý khách và hỗ trợ làm thủ tục. Khởi hành ra Hà Nội trên chuyến bay VN206 lúc 06h00...",
    },
    {
      title: "Ngày 02: HÀ GIANG - ĐỒNG VĂN - MÈO VẠC (Ăn sáng, trưa, chiều)",
      content:
        "Sau bữa sáng, đoàn khởi hành đi Đồng Văn. Tham quan Phố cổ Đồng Văn, Dinh Vua Mèo, thưởng thức đặc sản địa phương...",
    },
    {
      title:
        "Ngày 03: ĐỒNG VĂN - SÔNG NHO QUẾ - CAO BẰNG (Ăn sáng, trưa, chiều)",
      content:
        "Khởi hành đi Sông Nho Quế, trải nghiệm thuyền ngắm hẻm Tu Sản, tiếp tục đi Cao Bằng, tham quan Thác Bản Giốc và các danh thắng nổi tiếng...",
    },
  ];

  const [expandItems, setExpandItems] = useState(schedules.map(() => true));

  const toggle = (index: number) => {
    setExpandItems((prev) =>
      prev.map((status, pos) => (pos === index ? !status : status)),
    );
  };

  return (
    <div className="mt-[30px]">
      <h2 className="text-travel-primary mb-4 text-center text-[20px] font-bold capitalize">
        Lịch trình tour
      </h2>
      <div className="flex flex-col gap-4">
        {schedules.map((item, index) => {
          const expand = expandItems[index];

          return (
            <div
              key={item.title}
              className="overflow-hidden rounded-md bg-white shadow-md"
            >
              <div
                onClick={() => toggle(index)}
                className="flex cursor-pointer items-center justify-between gap-4 p-4"
              >
                <div className="text-travel-secondary flex-1 text-[16px] font-semibold">
                  {item.title}
                </div>
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#D7E8FC]">
                  <FaAngleDown
                    className={`text-travel-primary size-3 transition-transform duration-300 ${expand ? "" : "rotate-180"}`}
                  />
                </div>
              </div>

              <div
                className={`overflow-hidden text-sm transition-all duration-300 ${expand ? "max-h-[1000px]" : "max-h-0"}`}
              >
                <div className="px-4 pb-4">{item.content}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
