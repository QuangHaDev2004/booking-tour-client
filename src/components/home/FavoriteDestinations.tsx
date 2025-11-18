/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { Title } from "../title/Title";
import { useEffect, useRef, useState } from "react";

export const FavoriteDestinations = () => {
  const destinations = [
    {
      id: 1,
      name: "Miền Bắc",
      image:
        "https://statics.vinpearl.com/du-lich-vinh-Ha-Long-hinh-anh3_1625912082_1661247765.jpg",
    },
    {
      id: 2,
      name: "Miền Trung",
      image:
        "https://statics.vinpearl.com/du-lich-viet-nam-ha-long_1740037141.jpg",
    },
    {
      id: 3,
      name: "Miền Nam",
      image: "https://statics.vinpearl.com/du-lich-viet-nam-1_1689829508.jpg",
    },
    {
      id: 4,
      name: "Miền Tây",
      image: "https://statics.vinpearl.com/hu%E1%BA%BF_1661248551.jpg",
    },
    {
      id: 5,
      name: "Châu Á",
      image:
        "https://statics.vinpearl.com/b%C3%A1n%20%C4%91%E1%BA%A3o%20s%C6%A1n%20tr%C3%A0_1661247495.jpg",
    },
    {
      id: 6,
      name: "Châu Âu",
      image: "https://statics.vinpearl.com/dao-phu-quoc_1661246610.jpg",
    },
    {
      id: 7,
      name: "Châu Mỹ",
      image: "https://statics.vinpearl.com/du-lich-viet-nam-2_1689830109.jpg",
    },
    {
      id: 8,
      name: "Châu Úc",
      image:
        "https://statics.vinpearl.com/nha-trang-beaches-banner%20-%20Copy_1661247069.jpg",
    },
  ];

  const tabs = [
    "Miền Bắc",
    "Miền Trung",
    "Miền Nam",
    "Châu Á",
    "Châu Âu",
    "Châu Mỹ",
    "Châu Úc",
    "Châu Phi",
  ];

  const [activeTab, setActiveTab] = useState(0);
  const [tabPositions, setTabPositions] = useState<
    { width: number; left: number }[]
  >([]);
  const tabRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const positions = tabRefs.current.map((item) => ({
      width: item.offsetWidth,
      left: item.offsetLeft,
    }));
    setTabPositions(positions);
  }, []);

  return (
    <div className="pb-[45px] sm:pb-[60px]">
      <div className="container">
        <Title title="Điểm đến yêu thích" />
        <div className="mb-10 flex items-center justify-center">
          <div className="relative flex">
            {tabs.map((item, index) => (
              <div
                key={index}
                ref={(element) => {
                  if (element) {
                    tabRefs.current[index] = element; // ref là mảng bên viết như vậy
                  }
                }}
                className={`cursor-pointer px-4 py-2.5 text-[16px] font-semibold ${activeTab === index ? "text-travel-primary" : "text-travel-secondary/80 hover:text-travel-primary transition-all duration-300"}`}
                onClick={() => setActiveTab(index)}
              >
                {item}
              </div>
            ))}

            {tabPositions.length > 0 && (
              <div
                className="bg-travel-primary absolute top-full h-0.5 transition-all duration-500"
                style={{
                  width: `${tabPositions[activeTab].width}px`,
                  transform: `translateX(${tabPositions[activeTab].left}px)`,
                }}
              ></div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-4 gap-3">
          {destinations.map((item) => (
            <div
              key={item.id}
              className="group/item relative h-80 overflow-hidden rounded-lg"
            >
              <img
                src={item.image}
                alt=""
                className="h-full w-full object-cover brightness-75 transition-all duration-300 group-hover/item:scale-105 group-hover/item:brightness-50"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-lg font-bold text-white uppercase">
                {item.name}
                <hr className="invisible my-0 h-0 w-16 bg-white opacity-0 transition-all duration-300 group-hover/item:visible group-hover/item:my-4 group-hover/item:h-0.5 group-hover/item:opacity-100" />
                <Link
                  href={""}
                  className="bg-travel-primary border-travel-gray-100 invisible h-0 rounded-lg border p-0 text-sm capitalize opacity-0 transition-opacity duration-300 group-hover/item:visible group-hover/item:h-auto group-hover/item:px-3 group-hover/item:py-2 group-hover/item:opacity-100 hover:border-transparent"
                >
                  Khám phá
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
