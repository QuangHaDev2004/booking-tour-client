import { FaMinus, FaPlus } from "react-icons/fa6";

export const CounterInput = ({
  min,
  max,
  value,
  setQuantity,
  setInput,
}: {
  min: number;
  max: number;
  value: string;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  setInput: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const handleUp = () => {
    let num = Number(value);
    if (num < max) {
      num += 1;
      setQuantity(num);
      setInput(num.toString());
    }
  };

  const handleDown = () => {
    let num = Number(value);
    if (num > min) {
      num -= 1;
      setQuantity(num);
      setInput(num.toString());
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    let val = Number(e.target.value);
    if (isNaN(val) || val < min) val = min;
    else if (val > max) val = max;

    setQuantity(val);
    setInput(val.toString());
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
        className="focus:ring-travel-primary focus:shadow-travel-primary h-8 w-8 rounded-md text-center focus:shadow-md focus:ring sm:w-10"
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
