import { SiteHeader } from "../components/site-header";
import HomeFooter from "../components/site-footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <div>
      <SiteHeader />
      <div className="py-8 mx-8 md:mx-7 lg:mx-auto max-w-4xl">
        <p className="text-center font-mono text-sm mb-6 text-zinc-400">
          Sonarkode goals
        </p>
        <h1 className="text-4xl sm:text-7xl font-bold tracking-tight uppercase justify-center text-center mb-6 text-animation md:px-20">
          We share experience and knowledge to make every article is relevant
          and insightful.
        </h1>
        <p className="text-center  text-sm  leading-6 text-zinc-500 mb-40">
          {
            "We believe that having a platform to share your thoughts and knowledge is a powerful tool—but with great power comes great responsibility. It means striving for accuracy, being thoughtful with every word, and contributing positively to the community Through meaningful content, we aim to inspire, inform, and empower others to grow and take action."
          }
        </p>

        {/* Profile */}
        <div className="max-w-3xl gap-10 flex flex-col md:flex-row text-animation place-items-center md:items-start mx-auto mb-10">
          {/* Sonarkode */}
          <div className=" w-full max-w-2xl mx-auto">
            <div className="text-left  rounded-sm bg-zinc-50 dark:bg-zinc-900/30">
              <Avatar className="w-auto h-auto md:w-fit md:h-fit items-center rounded-md grayscale grain mb-2">
                <AvatarImage src="https://github.com/ferdianfariza.png" />
                <AvatarFallback>FF</AvatarFallback>
              </Avatar>
              <div className="justify-center w-auto">
                <p className="text-left font-regular font-mono text-2xl mt-4 md:mt-0 mb-1 tracking-tighter">
                  Sonarkode
                </p>
                <p className="text-left font-regular font-mono text-sm uppercase mb-3">
                  Blogsite
                </p>
                <hr className="mt-1 border-ui mb-5" />
                <p className="text-sm text-zinc-500 leading-6">
                  Muneeb Ali is the Founder of Stacks and Chairman of Hiro. He
                  holds a Ph.D in Computer Science from Princeton University and
                  has worked on internet protocols and distributed systems for
                  over 15 years. Hiro was created in 2021 to serve developers
                  building smart contracts for the Bitcoin blockchain. Muneeb is
                  a guest lecturer on cloud computing at Princeton and was a
                  technical advisor to the HBO show Silicon Valley.
                </p>
              </div>
            </div>
          </div>
          <div className=" w-full max-w-2xl mx-auto">
            <div className="text-left rounded-sm bg-zinc-50 dark:bg-zinc-900/30">
              <Avatar className="w-40 h-40 md:w-fit md:h-fit items-center rounded-3xl grayscale grain mb-2">
                <AvatarImage src="https://github.com/ferdianfariza.png" />
                <AvatarFallback>FF</AvatarFallback>
              </Avatar>
              <div className="justify-center w-auto">
                <p className="text-left font-regular font-mono text-2xl mt-4 md:mt-0 mb-1 tracking-tighter">
                  Ferdian Fariza
                </p>
                <p className="text-left font-regular font-mono text-sm uppercase mb-3">
                  Author
                </p>
                <hr className="mt-1 border-ui mb-5" />
                <p className="text-sm text-zinc-500 leading-6">
                  Muneeb Ali is the Founder of Stacks and Chairman of Hiro. He
                  holds a Ph.D in Computer Science from Princeton University and
                  has worked on internet protocols and distributed systems for
                  over 15 years. Hiro was created in 2021 to serve developers
                  building smart contracts for the Bitcoin blockchain. Muneeb is
                  a guest lecturer on cloud computing at Princeton and was a
                  technical advisor to the HBO show Silicon Valley.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Job */}
        <div className="max-w-3xl gap-10 flex flex-col md:flex-row text-animation place-items-center md:items-start mx-auto">
          {/* Sonarkode */}
          <div className="w-full max-w-2xl mx-auto">
            <div className="text-left p-8 border border-zinc-300 dark:border-zinc-700 rounded-sm bg-gradient-to-br from-zinc-100 via-zinc-100/30 to-white dark:from-zinc-800 dark:via-zinc-900 dark:to-black">
              <h3 className="text-2xl font-mono font-semibold mb-3 tracking-tight text-zinc-900 dark:text-zinc-100">
                Work with Sonar
              </h3>
              <p className="text-sm text-zinc-500 leading-5 max-w-xl mx-auto mb-6">
                Sponsorships, partnerships, and collaborations are welcome!
              </p>

              {/* Link 2 */}
              <Link
                href="/sponsorship"
                className="group flex w-fit items-end gap-2 mb-6">
                <div className="bg-zinc-200 dark:bg-zinc-800 group-hover:bg-amber-300 dark:group-hover:bg-amber-500 transition-colors w-9 h-9 grid place-content-center rounded-sm">
                  <ArrowUpRight />
                </div>
                <div className="flex-col">
                  <div className="text-sm font-semibold font-mono">
                    Sponsor Here
                  </div>
                  <hr className="mt-0.5 border group-hover:bg-amber-300 dark:group-hover:bg-amber-500 transition-colors" />
                </div>
              </Link>
              {/* Link 2 */}
              <Link
                href="/sponsorship"
                className="group flex w-fit items-end gap-2">
                <div className="bg-zinc-200 dark:bg-zinc-800 group-hover:bg-amber-300 dark:group-hover:bg-amber-500 transition-colors w-9 h-9 grid place-content-center rounded-sm">
                  <ArrowUpRight />
                </div>
                <div className="flex-col">
                  <div className="text-sm font-semibold font-mono">
                    See Analytics
                  </div>
                  <hr className="mt-0.5 border group-hover:bg-amber-300 dark:group-hover:bg-amber-500 transition-colors" />
                </div>
              </Link>
            </div>
          </div>
          {/* Personal */}
          <div className="w-full max-w-2xl mx-auto">
            <div className="text-left p-8 border border-zinc-300 dark:border-zinc-700 rounded-sm bg-gradient-to-br from-zinc-100 via-zinc-100/30 to-white dark:from-zinc-800 dark:via-zinc-900 dark:to-black">
              <h3 className="text-2xl font-mono font-semibold mb-3 tracking-tight text-zinc-900 dark:text-zinc-100">
                Work with Ferdian
              </h3>
              <p className="text-sm text-zinc-500 leading-5 max-w-xl mx-auto mb-6">
                {"Let's connect and explore opportunities to work together!"}
              </p>

              {/* Link 1 */}
              <Link
                href="/sponsorship"
                className="group flex w-fit items-end gap-2 mb-6">
                <div className="bg-zinc-200 dark:bg-zinc-800 group-hover:bg-amber-300 dark:group-hover:bg-amber-500 transition-colors w-9 h-9 grid place-content-center rounded-sm">
                  <ArrowUpRight />
                </div>
                <div className="flex-col">
                  <div className="text-sm font-semibold font-mono">
                    Work With Me
                  </div>
                  <hr className="mt-0.5 border group-hover:border-amber-300 dark:group-hover:border-amber-500 transition-colors" />
                </div>
              </Link>
              {/* Link 2 */}
              <Link
                href="/sponsorship"
                className="group flex w-fit items-end gap-2">
                <div className="bg-zinc-200 dark:bg-zinc-800 group-hover:bg-amber-300 dark:group-hover:bg-amber-500 transition-colors w-9 h-9 grid place-content-center rounded-sm">
                  <ArrowUpRight />
                </div>
                <div className="flex-col">
                  <div className="text-sm font-semibold font-mono">See CV</div>
                  <hr className="mt-0.5 border group-hover:bg-amber-300 dark:group-hover:bg-amber-500 transition-colors" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <HomeFooter />
    </div>
  );
}
