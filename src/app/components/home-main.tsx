import {SiteHeader} from './site-header';
import HomeHero from './home-hero';
import HomeFeatured from './home-featured';
import HomeBox from './home-box';
import HomeFooter from './site-footer';

export default function HomeMain() {
  return (
    <>
    <SiteHeader/>

    <div className="mt-1 md:mt-8 container mx-auto px-3 lg:px-0 gap-8 lg:gap-12 max-w-[1165px] flex flex-col place-items-center">
      <HomeHero/>
      <HomeFeatured/>
      <HomeBox />
    </div>
      <HomeFooter/>
    </>
  );
}