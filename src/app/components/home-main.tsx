"use client";
import { SiteHeader } from "./site-header";
import HomeBox from "./home-box";
import HomeFooter from "./site-footer";


export default function HomeMain() {

  const quote = `“If you woke up broke, you ass shouldn't have wanted to sleep.”`;
  const hero ='System Sonarkode.';

  return (
    <main className="max-w-[70rem] px-3 xl:px-0 mx-auto">
      <SiteHeader />
      <div className="mb-20 mx-auto  lg:px-0 place-items-center" id="hero">
        <div className="flex w-full md:w-full text-animation justify-between">
          <h1 className="my-10 md:my-15 text-left dark:text-amber-50 text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter font-bold md:font-medium ">{hero}</h1>    
          <h1 className="hidden md:inline h-fit px-4 my-15 text-left bg-amber-300 dark:bg-green-800 dark:text-amber-50 text-xl tracking-wider font-semibold border-2 border-ui rounded-sm border-dashed font-mono hover:rotate-y-180 hover:rotate-6 text-animation">{"BLOG"}
          </h1>  
            
        </div>
          <p className="flex w-full text-4xl font-regular tracking-tight ">
                {"Sonarkode is built for developers who value meaningful communication and continuous learning."}
          </p>
      </div>

      <div className="mx-auto px-3 lg:px-0 gap-15 lg:gap-12 flex flex-col place-items-center">
        <HomeBox />
      </div>

      <div className="mx-auto py-20">
        <div className="mx-3 md:mx-0 text-animation">
          <h1 className="text-4xl leading-tight sm:text-5xl md:text-6xl lg:text-6xl tracking-tight font-medium md:font-normal dark:text-amber-50">
            {quote}
          </h1>  
        </div>
      </div>
      
      <HomeFooter />
    </main>
  );
}
