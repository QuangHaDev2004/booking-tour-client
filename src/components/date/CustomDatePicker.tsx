"use client";

import { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import { vi } from "date-fns/locale";
import { addDays, startOfToday } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

// Đăng ký locale tiếng Việt
registerLocale("vi", vi);

export const CustomDatePicker = () => {
  const today = startOfToday();
  const tomorrow = addDays(today, 1);

  const [selectedDate, setSelectedDate] = useState<Date>(tomorrow);

  return (
    <div className="flex-1">
      <DatePicker
        selected={selectedDate}
        onChange={(date) => date && setSelectedDate(date)}
        locale="vi"
        dateFormat="EEE, dd 'thg' MM, yyyy" // ví dụ: Th 4, 22 thg 10, 2025
        minDate={today}
        onChangeRaw={(e) => e?.preventDefault()}
        className="text-gray h-full text-sm font-normal caret-transparent"
      />
    </div>
  );
};
