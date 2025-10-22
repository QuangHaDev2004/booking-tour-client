/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Title } from "../title/Title";

export const Section8 = () => {
  return (
    <div className="pb-[45px] sm:pb-[60px]">
      <div className="container">
        <Title title="Tin Tức Mới" />
        <div className="grid grid-cols-2 gap-2.5 sm:gap-x-5 sm:gap-y-6 lg:grid-cols-4">
          <div className="group/section-8 relative aspect-[302/308] overflow-hidden rounded-[10px] sm:rounded-[20px]">
            <Link href={""}>
              <div className="">
                <img
                  src="/assets/images/section-8-1.jpg"
                  alt=""
                  className="h-full w-full object-cover transition-all duration-500 group-hover/section-8:scale-105"
                />
              </div>
              <div
                style={{
                  background:
                    "linear-gradient(180deg, rgba(69, 2, 199, 0) 58.85%, rgba(69, 2, 199, 0.9) 100%)",
                }}
                className="absolute top-0 left-0 flex h-full w-full flex-col justify-end gap-1.5 p-2.5 font-normal text-white sm:gap-2.5 sm:px-6 sm:py-[18px]"
              >
                <div className="text-[10px] sm:text-xs">23/05/2024</div>
                <div className="line-clamp-2 text-sm sm:text-lg">
                  Homestay “cổ tích” giữa Đà Lạt mộng mơ
                </div>
              </div>
            </Link>
          </div>
          <div
            style={{ boxShadow: "0px 0px 4px 0px #00000040" }}
            className="col-span-2 row-span-2 row-start-2 overflow-hidden rounded-[10px] bg-white sm:rounded-[20px] lg:row-start-auto"
          >
            <Link href={""}>
              <div className="aspect-[536/400] overflow-hidden">
                <img
                  src="/assets/images/section-8-2.jpg"
                  alt=""
                  className="h-full w-full object-cover transition-all duration-500 hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-2.5 p-2.5 sm:px-6 sm:py-4">
                <div className="text-xs font-light sm:text-sm">23/05/2024</div>
                <div className="text-primary line-clamp-1 text-lg font-normal sm:text-[22px]">
                  Top 5 điểm check in độc đáo tại Singapore
                </div>
                <div className="line-clamp-2 text-justify text-sm font-light">
                  Nếu bạn nghĩ du lịch Singapore rất nhàm chán vì chỉ mãi quanh
                  quẩn trong những khối bê tông vô cảm thì bạn “chắc chưa?”. Tuy
                  đảo quốc Sư Tử không phải là một quốc gia rộng lớn nhưng các
                  địa điểm du lịch tại Singapore chưa từng đánh mất sức hút đối
                  với cộng đồng xê dịch quốc tế.
                </div>
              </div>
            </Link>
          </div>
          <div className="group/section-8 relative aspect-[302/308] overflow-hidden rounded-[10px] sm:rounded-[20px]">
            <Link href={""}>
              <div className="">
                <img
                  src="/assets/images/section-8-1.jpg"
                  alt=""
                  className="h-full w-full object-cover transition-all duration-500 group-hover/section-8:scale-105"
                />
              </div>
              <div
                style={{
                  background:
                    "linear-gradient(180deg, rgba(69, 2, 199, 0) 58.85%, rgba(69, 2, 199, 0.9) 100%)",
                }}
                className="absolute top-0 left-0 flex h-full w-full flex-col justify-end gap-1.5 p-2.5 font-normal text-white sm:gap-2.5 sm:px-6 sm:py-[18px]"
              >
                <div className="text-[10px] sm:text-xs">23/05/2024</div>
                <div className="line-clamp-2 text-sm sm:text-lg">
                  Homestay “cổ tích” giữa Đà Lạt mộng mơ
                </div>
              </div>
            </Link>
          </div>
          <div className="group/section-8 relative aspect-[302/308] overflow-hidden rounded-[10px] sm:rounded-[20px]">
            <Link href={""}>
              <div className="">
                <img
                  src="/assets/images/section-8-1.jpg"
                  alt=""
                  className="h-full w-full object-cover transition-all duration-500 group-hover/section-8:scale-105"
                />
              </div>
              <div
                style={{
                  background:
                    "linear-gradient(180deg, rgba(69, 2, 199, 0) 58.85%, rgba(69, 2, 199, 0.9) 100%)",
                }}
                className="absolute top-0 left-0 flex h-full w-full flex-col justify-end gap-1.5 p-2.5 font-normal text-white sm:gap-2.5 sm:px-6 sm:py-[18px]"
              >
                <div className="text-[10px] sm:text-xs">23/05/2024</div>
                <div className="line-clamp-2 text-sm sm:text-lg">
                  Homestay “cổ tích” giữa Đà Lạt mộng mơ
                </div>
              </div>
            </Link>
          </div>
          <div className="group/section-8 relative aspect-[302/308] overflow-hidden rounded-[10px] sm:rounded-[20px]">
            <Link href={""}>
              <div className="">
                <img
                  src="/assets/images/section-8-1.jpg"
                  alt=""
                  className="h-full w-full object-cover transition-all duration-500 group-hover/section-8:scale-105"
                />
              </div>
              <div
                style={{
                  background:
                    "linear-gradient(180deg, rgba(69, 2, 199, 0) 58.85%, rgba(69, 2, 199, 0.9) 100%)",
                }}
                className="absolute top-0 left-0 flex h-full w-full flex-col justify-end gap-1.5 p-2.5 font-normal text-white sm:gap-2.5 sm:px-6 sm:py-[18px]"
              >
                <div className="text-[10px] sm:text-xs">23/05/2024</div>
                <div className="line-clamp-2 text-sm sm:text-lg">
                  Homestay “cổ tích” giữa Đà Lạt mộng mơ
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
