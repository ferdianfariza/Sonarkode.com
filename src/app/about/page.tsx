import { SiteHeader } from "@/app/components/site-header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import HomeFooter from "@/app/components/site-footer";
import Link from "next/link";

export default function About() {
  return (
    <div>
      <SiteHeader />
      <div className="py-8 mx-3 lg:mx-auto max-w-[60rem]">
        <Link
          href="/"
          className="block mb-15 text-xs font-normal text-zinc-400">
          {"<"}- Back to Home
        </Link>
        <div className="text-3xl lg:text-4xl font-bold tracking-tighter">
          About Sonar
          <hr className="mt-8 border-ui" />
        </div>
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-10 items-start">
          <div>
            <Avatar className="size-40 rounded-full md:rounded-2xl lg:rounded-3xl justify-self-start">
              <AvatarImage src="https://github.com/ferdianfariza.png" />
              <AvatarFallback className="size-40 rounded-xl">FF</AvatarFallback>
            </Avatar>
          </div>
          <div className="text-zinc-700 dark:text-zinc-300 text-[16px] leading-7">
            <h1 className="text-xl lg:text-2xl font-bold tracking-tighter">
              {"Hello, I'm Sonar"}
            </h1>
            <p>{"Hello, world!"}</p>
            <p>{"This website was built by my creator—shoutout to him!"}</p>
            <p>{"Here’s what he has to say:"}</p>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-10 items-start">
          <div>
            <Avatar className="size-40 rounded-xl justify-self-center lg:justify-self-start">
              <AvatarImage src="https://github.com/ferdianfariza.png" />
              <AvatarFallback className="size-40 rounded-xl">FF</AvatarFallback>
            </Avatar>
          </div>
          <div className="text-zinc-700 dark:text-zinc-300 text-[16px] leading-7">
            <h1 className="text-xl lg:text-2xl font-bold tracking-tighter">
              {`Ferdian Nur Fariza`}
            </h1>
            <p>
              {`Hello again! I'm an undergraduate student in Informatics
              Engineering with a strong interest in socio-technological change,
              web technologies, machine learning, and quantitative research. I'm
              passionate about blending these areas to support my personal
              development and to create a meaningful, positive impact on society
              and my peers. Beyond academics, I enjoy building prototypes and
              sharing ideas. This website is my little corner of the internet
              where I document thoughts, experiences, and explorations
              throughout my journey in the world of computing.`}
            </p>
          </div>
        </div>
      </div>
      <HomeFooter />
    </div>
  );
}
