import { SiteHeader } from "./site-header";
import HomeHero from "./home-hero";
import HomeFeatured from "./home-featured";
import HomeBox from "./home-box";
import HomeFooter from "./site-footer";

export default function HomeMain() {
  return (
    <>
      <SiteHeader />
      <div className="md:mt-8 mx-auto px-0 md:px-3 lg:px-0 max-w-[60rem] place-items-center">
        <HomeHero />
      </div>
      <div className="md:mt-8 container mx-auto px-4 lg:px-0 gap-15 lg:gap-12 max-w-[60rem] flex flex-col place-items-center">
        <HomeFeatured />
        <HomeBox />
      </div>
      <HomeFooter />
    </>
  );
}
