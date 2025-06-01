import { SiteHeader } from "../components/site-header";
import HomeFooter from "../components/site-footer";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About',
};

export default function About() {
  return (
    <div>
      <SiteHeader />
      <div className="py-7 px-3 lg:px-0 mx-auto max-w-[60rem] scroll-smooth space-y-5">
        {/* HERO */}
        <div className="text-left space-y-7 pb-7 mb-10">
          <div className="flex text-5xl sm:text-8xl font-semibold tracking-tighter text-animation dark:text-amber-50">
            {"One Stop Place to Read and Learn"}
            <div className="hidden md:inline h-fit px-3 my-auto bg-amber-300 dark:bg-green-800 dark:text-amber-50 text-xl tracking-wider font-semibold border-2 border-ui rounded-sm border-dashed font-mono hover:rotate-y-180 hover:rotate-6 text-animation shrink-0">{"ABOUT US"}</div>  
          </div>
          <p className="w-auto text-zinc-600 text-sm  dark:text-amber-50/60 font-medium leading-6 line-clamp-3 sm:line-clamp-3">
            {"We believe that having a platform to share your thoughts and knowledge is a powerful tool—but with great power comes great responsibility. It means striving for accuracy, being thoughtful with every word, and contributing positively to the community. Through meaningful content, we aim to inspire, inform, and empower others to grow and take action."}
          </p>
        </div>

        {/* IMAGE GRID 1 */}
        <div className="w-full flex flex-col md:grid grid-cols-3 gap-8 mb-20">

          {/* ferdian */}
          <div className="w-full h-full md:col-span-1 space-y-5">
            <div className="border-b border-ui font-mono text-xs pb-2 ">
            / [IMAGE]
            </div>
            <div className="p-2 bg-amber-400/20 dark:bg-green-800/50 w-full border border-ui">
                <p className="font-mono text-xs mb-2 text-center">
                [ FIG. 31 ]
                </p>
                <Avatar className="w-full h-full flex items-center rounded-none grayscale border border-ui">
                  <AvatarImage src="https://github.com/ferdianfariza.png" />
                </Avatar>
            </div>
          </div>

          {/* description */}
          <div className="w-full col-span-2 space-y-5">
            <div className="border-b border-ui font-mono text-xs pb-2 w-full h-fit">
              / [DESCRIPTION]
            </div>
            <div className="flex flex-col md:grid grid-cols-2 gap-8 ">
              <div className="col-span-2 leading-6 flex-col space-y-5">
                <p className=" text-3xl tracking-tight">{"Ferdian Nur Fariza"}</p>
                <p className="text-xl  leading-8 tracking-tight">
                {"I am undergraduate student of Informatics Engineering with main areas of interest includes socio-technological change, web technology, machine learning and quantitative research."}
                </p>
      
              </div>
              {/* <div className="col-span-1 space-y-4">
                        <Link href="/" className="flex w-full bg-amber-400/50 dark:bg-green-800/50 px-auto justify-center">asd</Link>
                <Link href="/" className="flex w-full bg-amber-400/50 dark:bg-green-800/50">asd</Link>
              </div> */}
            </div>
          </div>
        </div>




        {/* Profiles */}
        {/* <div className="max-w-3xl gap-10 flex flex-col md:flex-row text-animation place-items-center md:items-start mx-auto mb-10">
          {profileData.map((profile, index) => (
            <div key={index} className="w-full max-w-2xl mx-auto">
              <div className="text-left rounded-sm bg-zinc-50 dark:bg-zinc-900/30">
                <div className="flex gap-5 items-start">
                  <Avatar className="w-20 h-20 md:w-fit md:h-fit items-center rounded-sm mb-5">
                    <AvatarImage src={profile.image} />
                    <AvatarFallback>{profile.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="inline md:hidden gap-y-2">
                    <p className="text-left font-regular font-mono text-2xl tracking-tighter">
                      {profile.name}
                    </p>
                    <p className="text-left font-regular font-mono text-sm uppercase">
                      {profile.title}
                    </p>
                  </div>
                </div>
                <hr className="mt-1 border-ui mb-5 flex md:hidden" />
                <div className="justify-center w-auto">
                  <div className="hidden md:inline">
                    <p className="text-left font-regular font-mono text-2xl tracking-tighter mb-2">
                      {profile.name}
                    </p>
                    <p className="text-left font-regular font-mono text-sm uppercase mb-5">
                      {profile.title}
                    </p>
                  </div>
                  <hr className="mt-1 border-ui mb-5 hidden md:flex" />
                  <p className="text-sm text-zinc-500 leading-6">
                    {profile.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div> */}

        {/* Work Sections
        <div className="max-w-3xl gap-10 flex flex-col md:flex-row text-animation place-items-center md:items-start mx-auto">
          {workData.map((work, index) => (
            <div key={index} className="w-full max-w-2xl mx-auto">
              <div className="text-left p-8 border border-zinc-300 dark:border-zinc-700 rounded-sm text-animation hover:shadow-xl hover:shadow-blue-500/25 bg-gradient-to-br from-zinc-100 via-zinc-100/30 to-white dark:from-zinc-800 dark:via-zinc-900 dark:to-black">
                <h3 className="text-2xl font-mono font-semibold mb-3 tracking-tight text-zinc-900 dark:text-zinc-100">
                  {work.title}
                </h3>
                <p className="text-sm text-zinc-500 leading-5 max-w-xl mx-auto mb-6">
                  {work.description}
                </p>
                {work.links.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    href={link.href}
                    className="group flex w-fit items-end gap-2 mb-6">
                    <div className="bg-zinc-200 dark:bg-zinc-800 group-hover:bg-amber-300 dark:group-hover:bg-amber-500 transition-colors w-9 h-9 grid place-content-center rounded-sm">
                      <ArrowUpRight />
                    </div>
                    <div className="flex-col">
                      <div className="text-sm font-semibold font-mono">
                        {link.label}
                      </div>
                      <hr className="mt-0.5 bg-zinc-200 dark:bg-zinc-800 group-hover:bg-amber-300 dark:group-hover:bg-amber-500 transition-colors" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div> */}
      </div>
      <HomeFooter />
    </div>
  );
}
