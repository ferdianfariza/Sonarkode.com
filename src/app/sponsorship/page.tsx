"use client";

import { SiteHeader } from "../components/site-header";
import HomeFooter from "../components/site-footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";



const profileData = [
  {
    name: "Sonarkode",
    title: "Blogsite",
    image: "sonar.png",
    description:
      "Sonarkode was founded in 2024. What began as a small side project to explore modern tech stacks like Next.js has since evolved into a growing platform for sharing ideas, insights, and inspiration. Inspired by platforms like Daily.dev, Sonarkode is built for developers who value meaningful communication and continuous learning.",
  },
  {
    name: "Ferdian Fariza",
    title: "Author",
    image: "https://github.com/ferdianfariza.png",
    description:
      "Hello again, I am undergraduate student of Informatics Engineering with main areas of interest includes socio-technological change, web technology, machine learning and quantitative research. Outside of academic, I love building prototypes and sharing thought. Currently I maintain this website to keep sharing thought and experience through this computer journey.",
  },
];

const workData = [
  {
    title: "Work with Sonar",
    description: "Sponsorships, partnerships, and collaborations are welcome!",
    links: [
      { label: "Sponsor Here", href: "/sponsorship" },
      { label: "See Analytics", href: "/sponsorship" },
    ],
  },
  {
    title: "Work with Ferdian",
    description: "Let's connect and explore opportunities to work together!",
    links: [
      { label: "Work With Me", href: "/sponsorship" },
      { label: "See CV", href: "/sponsorship" },
    ],
  },
];

export default function About() {
  return (
    <div>
      <SiteHeader />
      <div className="py-8 mx-8 md:mx-7 lg:mx-auto max-w-4xl scroll-smooth">
        <p className="text-center font-mono text-sm mb-6 text-zinc-400">
          Sonarkode goals
        </p>
        <h1 className="text-4xl sm:text-7xl font-bold tracking-tight uppercase justify-center text-center mb-6 text-animation md:px-20">
          We share experience and knowledge to make every article is relevant
          and insightful.
        </h1>
        <p className="text-center text-sm leading-6 text-zinc-500 mb-40">
          We believe that having a platform to share your thoughts and knowledge
          is a powerful tool—but with great power comes great responsibility. It
          means striving for accuracy, being thoughtful with every word, and
          contributing positively to the community. Through meaningful content,
          we aim to inspire, inform, and empower others to grow and take action.
        </p>

        {/* Profiles */}
        <div className="max-w-3xl gap-10 flex flex-col md:flex-row text-animation place-items-center md:items-start mx-auto mb-10">
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
        </div>

        {/* Work Sections */}
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
        </div>
      </div>
      <HomeFooter />
    </div>
  );
}
