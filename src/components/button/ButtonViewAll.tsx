import Link from "next/link";

export const ButtonViewAll = ({ href }: { href: string }) => {
  return (
    <Link
      href={href}
      className="border-travel-primary text-travel-primary hover:bg-travel-primary mx-auto flex h-[42px] w-56 items-center justify-center rounded-4xl border-2 text-sm font-medium transition-all duration-300 hover:text-white sm:text-[16px]"
    >
      Xem tất cả
    </Link>
  );
};
