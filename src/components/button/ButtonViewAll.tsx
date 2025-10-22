import Link from "next/link";

export const ButtonViewAll = () => {
  return (
    <Link
      href={""}
      className="border-primary text-primary hover:bg-primary mx-auto flex h-[42px] w-[125px] items-center justify-center rounded-md border-2 text-sm font-medium transition-all duration-300 hover:text-white sm:h-[47px] sm:w-[140px] sm:text-[16px]"
    >
      Xem tất cả
    </Link>
  );
};
