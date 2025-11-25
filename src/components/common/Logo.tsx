/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export const Logo = ({
  websiteName,
  logo,
}: {
  websiteName: string;
  logo: string;
}) => {
  return (
    <Link href={"/"} className="flex items-center justify-center gap-3">
      <img
        src={logo}
        alt="Logo"
        className="h-[50px] w-auto"
      />
      <p className="text-travel-primary text-2xl font-extrabold uppercase">
        {websiteName}
      </p>
    </Link>
  );
};
