/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href={"/"} className="flex items-center gap-3">
      <img
        src="/assets/images/logo-icon.svg"
        alt="Logo"
        className="h-[50px] w-auto"
      />
      <p className="text-travel-primary text-2xl font-extrabold uppercase">
        36.Travel
      </p>
    </Link>
  );
};
