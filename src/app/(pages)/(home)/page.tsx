import { HomeBanner } from "@/components/home/HomeBanner";
import { HomeLastMinuteDeals } from "@/components/home/HomeLastMinuteDeals";
import { HomeDealsCarousel } from "@/components/home/HomeDealsCarousel";
import { TourList } from "@/components/tour/TourList";
import { ImageBanner } from "@/components/home/ImageBanner";
import { LatestNews } from "@/components/home/LatestNews";
import { FavoriteDestinations } from "@/components/home/FavoriteDestinations";
import { getLastMinuteDeals } from "@/services/home";

export default async function HomePage() {
  const { tourListDeal } = await getLastMinuteDeals();

  return (
    <>
      <HomeBanner />
      <HomeLastMinuteDeals tourListDeal={tourListDeal} />
      <HomeDealsCarousel />
      <TourList title="Tour Trong Nước" href="" />
      <ImageBanner src="/assets/images/section-5.jpg" />
      <TourList title="Tour Nước Ngoài" href="" />
      <ImageBanner src="/assets/images/section-7.jpg" />
      <FavoriteDestinations />
      <LatestNews />
    </>
  );
}
