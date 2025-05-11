import { SiteHeader } from "./site-header";
import HomeHero from "./home-hero";
import HomeBox from "./home-box";
import HomeFooter from "./site-footer";

export default function HomeMain() {
  return (
    <>
      <SiteHeader />
      <div className=" mx-auto px-0 md:px-3 lg:px-0 max-w-[60rem] place-items-center">
        <div className="py-10 lg:py-15 mx-3 md:mx-0 text-animation">
          <h1 className="text-left text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter font-bold md:font-semibold">{"<h1> it's Sonar, Hello World!"}</h1>
          
        </div>
        <HomeHero/>
      </div>
      <div className="container mx-auto px-3 lg:px-0 gap-15 lg:gap-12 max-w-[60rem] flex flex-col place-items-center">
        {/* <HomeFeatured /> */}
        <HomeBox />
        <div className="pb-5 lg:pb-17 mx-3 md:mx-0 text-animation">
          <h1 className="text-left text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter font-bold md:font-semibold">{"</h2> Have a Nice Day!"}</h1>
          
        </div>
      </div>
      <HomeFooter />
    </>
  );
}
