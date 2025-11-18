import { HomeBanner } from "@/components/home/HomeBanner";
import { HomeLastMinuteDeals } from "@/components/home/HomeLastMinuteDeals";
import { HomeDealsCarousel } from "@/components/home/HomeDealsCarousel";
import { TourList } from "@/components/tour/TourList";
import { ImageBanner } from "@/components/home/ImageBanner";
import { LatestNews } from "@/components/home/LatestNews";

export default function HomePage() {
  return (
    <>
      <HomeBanner />
      <HomeLastMinuteDeals />
      <HomeDealsCarousel />
      <TourList title="Tour Trong Nước" href="" />
      <ImageBanner src="/assets/images/section-5.jpg" />
      <TourList title="Tour Nước Ngoài" href="" />
      <ImageBanner src="/assets/images/section-7.jpg" />
      <LatestNews />
    </>
  );
}
