"use client";
import { SiteHeader } from "./site-header";
import HomeHero from "./home-hero";
import HomeBox from "./home-box";
import HomeFooter from "./site-footer";
import Link from 'next/link'


export default function HomeMain() {

  const link="/posts/ketuhuhhh";
  const title="Figma for Developer: Porche Semua yang perlu kamu ketahui";
  const quote = `“Laufey - Falling Behind”`;
  const hero ='The Sonarkode.';

  return (
    <>
      <SiteHeader />
      <div className=" mx-auto px-0 md:px-3 lg:px-0 max-w-[60rem] place-items-center" id="hero">
        <div className="flex w-full md:w-full px-3 md:px-0 text-animation justify-between">
          <h1 className="my-10 md:my-15 text-left dark:text-amber-50 text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter font-bold md:font-semibold ">{hero}</h1>    
          <h1 className="hidden md:inline h-fit px-4 my-15 text-left bg-amber-300 dark:bg-green-800 dark:text-amber-50 text-xl tracking-wider font-semibold border-2 border-ui rounded-sm border-dashed font-mono hover:rotate-y-180 hover:rotate-6 text-animation">{"BLOG"}</h1>    
        </div>
        <HomeHero/>
      </div>

      <div className="container mx-auto px-3 lg:px-0 gap-15 lg:gap-12 max-w-[60rem] flex flex-col place-items-center">
        <HomeBox />
      </div>

      <div className=" mx-auto px-0 md:px-3 lg:px-0 max-w-[60rem]">
        <div className="pt-10 lg:pt-15 mx-3 md:mx-0 text-animation">
          <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-5xl tracking-tight font-bold md:font-bold dark:text-amber-50">
            {quote}
          </h1>  
            
        </div>
        <div className="my-10 w-auto px-3 md:px-0 gap-2">
          <p className="shrink-0 font-bold mb-20 text-center">
          [READ MORE]: <Link href={link} className=" underline font-normal">{title}</Link>
          </p>
        </div>
      
      </div>
      
      <HomeFooter />
    </>
  );
}
