"use client";

import { useEffect, useState } from "react";
import Countdown from "react-countdown";

export const ClockCountdown = ({ expireDate }: { expireDate: string }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if(!isClient) return null;

  return (
    <Countdown
      date={new Date(expireDate)}
      // onComplete={handleExpire} // gọi khi hết thời gian
      renderer={({ days, hours, minutes, seconds }) => {
        return (
          <div className="mb-[47px] flex justify-center gap-4 text-center">
            <div className="text-primary h-14 w-14 rounded-lg bg-white">
              <div className="text-3xl font-bold">
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
