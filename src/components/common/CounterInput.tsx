import { FaMinus, FaPlus } from "react-icons/fa6";

export const CounterInput = ({
  min,
  max,
  value,
  setQuantity,
}: {
  min: number;
  max: number;
  value: number | string;
  setQuantity: React.Dispatch<React.SetStateAction<number | string>>;
}) => {
  const handleDown = () => {
    if (Number(value) > min) {
      setQuantity((prev) => Number(prev) - 1);
    }
  };

  const handleUp = () => {
    if (Number(value) < max) {
      setQuantity((prev) => Number(prev) + 1);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(e.target.value);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    let val = Number(e.target.value);
    if (isNaN(val) || val < min) val = min;
    else if (val > max) val = max;
    setQuantity(val);
  };

  return (
    <div className="flex items-center gap-2">
      <div
        onClick={handleDown}
        className="bg-travel-gray-100/20 flex h-8 w-8 cursor-pointer items-center justify-center rounded-md"
      >
        <FaMinus size={12} />
      </div>
      <input
        type="text"
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        className="focus:ring-travel-primary focus:shadow-travel-primary h-8 w-8 sm:w-10 rounded-md text-center focus:shadow-md focus:ring"
      />
      <div
        onClick={handleUp}
        className="bg-travel-gray-100/20 flex h-8 w-8 cursor-pointer items-center justify-center rounded-md"
      >
        <FaPlus size={12} />
      </div>
    </div>
  );
};
