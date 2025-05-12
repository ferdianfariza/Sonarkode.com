"use client";
import { SiteHeader } from "./site-header";
import HomeHero from "./home-hero";
import HomeBox from "./home-box";
import HomeFooter from "./site-footer";

export default function HomeMain() {
  return (
    <>
      <SiteHeader />
      <div className=" mx-auto px-0 md:px-3 lg:px-0 max-w-[60rem] place-items-center" id="hero">
        <div className="py-10 lg:py-15 mx-3 md:mx-0 text-animation">
          <h1 className="text-left text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter font-bold md:font-semibold">{"<h1> it's Sonar, Hello World!"}</h1>    
        </div>
        <HomeHero/>
      </div>
      <div className="container mx-auto px-3 lg:px-0 gap-15 lg:gap-12 max-w-[60rem] flex flex-col place-items-center">
        {/* <HomeFeatured /> */}
        <HomeBox />
      </div>
      <div className=" mx-auto px-0 md:px-3 lg:px-0 max-w-[60rem]">
        <div className="py-10 lg:py-15 mx-3 md:mx-0 text-animation">
          <h1 className="text-left text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter font-bold md:font-semibold">{"<h2> Maybe it's time to go to the top! "}<button
          className="bg-zinc-800 hover:bg-zinc-700 text-animation text-3xl sm:text-4xl md:text-5xl lg:text-6xl p-1 px-3 rounded-2xl border-2 border-ui "
          onClick={() => {
            document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          hit me
        </button></h1>  
            
        </div>
      </div>
      
      <HomeFooter />
    </>
  );
}
