"use client";
import { useClientReady } from "@/hooks/useClientReady";
import Countdown from "react-countdown";

export const ClockCountdown = ({ expireDate }: { expireDate: string }) => {
  const { isReady } = useClientReady();

  if (!isReady)
    return (
      <div className="mb-[47px] flex justify-center gap-4 text-center">
        {Array(4)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className="text-primary h-14 w-14 rounded-lg bg-white"
            >
              <div className="mx-auto mt-2 h-6 w-8 animate-pulse rounded-sm bg-gray-300"></div>
              <div className="mx-auto mt-1 h-4 w-8 animate-pulse rounded-sm bg-gray-300"></div>
            </div>
          ))}
      </div>
    );

  return (
    <Countdown
      date={new Date(expireDate)}
      // onComplete={handleExpire} // gọi khi hết thời gian
      renderer={({ days, hours, minutes, seconds }) => {
        return (
          <div className="mb-[47px] flex justify-center gap-4 text-center">
            <div className="text-primary h-14 w-14 rounded-lg bg-white">
              <div className="text-3xl font-bold">
                {/* độ dài chuỗi < 2 thì thêm 0 vào trước */}
                {String(days).padStart(2, "0")}
              </div>
              <div className="text-xs font-medium">Ngày</div>
            </div>
            <div className="text-primary h-14 w-14 rounded-lg bg-white">
              <div className="text-3xl font-bold">
                {String(hours).padStart(2, "0")}
              </div>
              <div className="text-xs font-medium">Giờ</div>
            </div>
            <div className="text-primary h-14 w-14 rounded-lg bg-white">
              <div className="text-3xl font-bold">
                {String(minutes).padStart(2, "0")}
              </div>
              <div className="text-xs font-medium">Phút</div>
            </div>
            <div className="text-primary h-14 w-14 rounded-lg bg-white">
              <div className="text-3xl font-bold">
                {String(seconds).padStart(2, "0")}
              </div>
              <div className="text-xs font-medium">Giây</div>
            </div>
          </div>
        );
      }}
    />
  );
};
