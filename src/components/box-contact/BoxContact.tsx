/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { FaPhoneVolume } from "react-icons/fa6";

export const BoxContact = () => {
  return (
    <div className="fab fixed right-4 bottom-24">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-lg btn-circle bg-travel-primary relative border-none text-white"
      >
        <FaPhoneVolume />
        <div className="absolute bottom-0 left-0 h-4 w-4 rounded-full border-2 border-white bg-green-400"></div>
      </div>

      <div className="fab-close">
        <span className="btn btn-circle btn-lg bg-travel-red border-none text-white">
          ✕
        </span>
      </div>

      <Link
        href={"/"}
        target="_blank"
        className="btn btn-lg btn-circle border-none"
      >
        <img src="/assets/images/facebook.png" alt="Facebook" />
      </Link>
      <Link
        href={"/"}
        target="_blank"
        className="btn btn-lg btn-circle border-none"
      >
        <img src="/assets/images/zalo.png" alt="Zalo" />
      </Link>
    </div>
  );
};
