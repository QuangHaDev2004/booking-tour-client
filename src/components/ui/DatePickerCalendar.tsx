import { useEffect, useState } from "react";
import { DatePicker } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import { vi } from "date-fns/locale";
import { format, parseISO } from "date-fns";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
registerLocale("vi", vi);

export const DatePickerCalendar = ({
  value,
  onChange,
  className,
}: {
  value?: string;
  onChange: (value: string) => void;
  className: string;
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  useEffect(() => {
    if (value) {
      setSelectedDate(parseISO(value));
    } else {
      setSelectedDate(null);
    }
  }, [value]);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    if (date) onChange(format(date, "yyyy-MM-dd"));
    else onChange("");
  };

  return (
    <DatePicker
      selected={selectedDate}
      onChange={handleDateChange}
      locale={vi}
      dateFormat="dd/MM/yyyy"
      placeholderText="Chọn ngày khởi hành"
      className={className}
      minDate={new Date()}
      renderCustomHeader={({
        date,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        <div className="text-travel-secondary flex items-center justify-between px-4 py-1 text-sm">
          <button
            type="button"
            className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-white disabled:opacity-40 disabled:shadow-none!"
            style={{ boxShadow: "0 3px 8px rgba(0, 0, 0, .24)" }}
            onClick={decreaseMonth}
            disabled={prevMonthButtonDisabled}
          >
            <FaArrowLeftLong className="size-3" />
          </button>
          <span className="font-semibold">
            Tháng {date.getMonth() + 1} - {date.getFullYear()}
          </span>
          <button
            type="button"
            className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-white"
            style={{ boxShadow: "0 3px 8px rgba(0, 0, 0, .24)" }}
            onClick={increaseMonth}
            disabled={nextMonthButtonDisabled}
          >
            <FaArrowRightLong className="size-3" />
          </button>
        </div>
      )}
    />
  );
};
