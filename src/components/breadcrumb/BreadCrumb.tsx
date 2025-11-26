/* eslint-disable @next/next/no-img-element */
import { BreadCrumbDetail } from "@/types/category";
import Link from "next/link";
import { FaAnglesRight, FaHouse } from "react-icons/fa6";

export const BreadCrumb = ({
  breadcrumb,
}: {
  breadcrumb: BreadCrumbDetail[];
}) => {
  let itemLast: BreadCrumbDetail | null = null;
  if (breadcrumb && breadcrumb.length > 0) {
    itemLast = breadcrumb[breadcrumb.length - 1];
  }

  return (
    <>
      {breadcrumb && breadcrumb.length > 0 && (
        <div className="relative">
          {/* Image */}
          <div className="h-[253px]">
            <img
              src={
                itemLast?.avatar ||
                "https://placehold.co/1x1/white/black?text=No+Image"
              }
              alt={itemLast?.name}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Content */}
          <div
            style={{
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(69, 2, 199, 0.8) 100%)",
            }}
            className="absolute top-0 left-0 flex h-full w-full flex-col justify-end pb-5"
          >
            <div className="container">
              <h1 className="mb-2 text-[20px] font-medium text-white capitalize sm:text-[32px]">
                {itemLast?.name}
              </h1>
              <nav className="flex flex-wrap items-center gap-x-2.5 gap-y-[5px] text-[11px] font-normal text-white sm:gap-x-4 sm:text-[16px]">
                <div className="flex items-center gap-x-2.5">
                  <FaHouse />
                  <Link href={"/"}>Trang Chủ</Link>
                </div>

                {breadcrumb.map((item, index) => (
                  <div key={item.id} className="flex items-center gap-x-2.5">
                    <FaAnglesRight className="text-[8px] sm:text-[10px]" />
                    {index !== breadcrumb.length - 1 ? (
                      <Link href={`/category/${item.slug}`}>{item.name}</Link>
                    ) : (
                      <span className="font-bold">{item.name}</span>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
