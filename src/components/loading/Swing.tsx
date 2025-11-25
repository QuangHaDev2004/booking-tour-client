import { FaRegPaperPlane } from "react-icons/fa6";

export const Swing = () => {
  return (
    <>
      <div className="fixed inset-0 z-[999] flex items-center justify-center bg-white">
        <FaRegPaperPlane
          size={30}
          className="animate-[swing_1s_ease-in-out_infinite]"
        />
      </div>
    </>
  );
};
