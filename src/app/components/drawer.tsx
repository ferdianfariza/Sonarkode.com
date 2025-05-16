"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Icons } from "./logo";

import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { HiOutlineBars2 } from "react-icons/hi2";
import { Button } from "@/components/ui/button";



export default function Logo() {
  return (
    <div className="flex items-center justify-start gap-5">
      {/* <div className="hidden md:inline-flex lg:inline-flex font-mono font-semibold rounded-none">
        <Link href="/">
          <Icons.icon className="h-auto w-8 mr-1 text-blue-500 bg-neutral-200/70 dark:bg-neutral-800/50 border border-dashed border-black hover:border-solid p-2 backdrop-blur-3xl" />
        </Link>
      </div> */}
      <Button
        asChild
        variant="sonar"
        size="sonar"
        className="hidden md:inline-flex font-mono font-semibold leading-tight tracking-wide">
        <Link href="/">
          [SONARKODE]
        </Link>
      </Button>
      <div className="md:hidden lg:hidden flex items-center">
        <Drawer>
          <DrawerTrigger asChild>
            <HiOutlineBars2
              size={30}
              className="text-foreground hover:text-black mr-4"
            />
          </DrawerTrigger>
          <DrawerContent className="max-h-[60svh]">
            <DrawerHeader>
              <div className="p-1 w-full flex-col flex items-start text-lg">
                <DrawerTitle> </DrawerTitle>
                <DrawerClose
                  asChild
                  className="active:bg-zinc-100 active:dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 w-full text-start font-medium rounded-2xl p-3">
                  <Link href="/" className="flex items-center gap-1.5">
                    <span>Home</span>
                  </Link>
                </DrawerClose>
                <DrawerClose
                  asChild
                  className="active:bg-zinc-100 active:dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 w-full text-start  font-medium rounded-2xl p-3">
                  <Link href="/about" className="flex items-center gap-1.5">
                    <span>About</span>
                  </Link>
                </DrawerClose>
                <DrawerClose
                  asChild
                  className="active:bg-zinc-100 active:dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 w-full text-start font-medium rounded-2xl p-3">
                  <Link
                    href="/sponsorship"
                    className="flex items-center gap-1.5">
                    <span>Sponsorship</span>
                  </Link>
                </DrawerClose>

                <div className="w-full px-3">
                  <Separator orientation="horizontal" className=" my-4 bg-border" />
                </div>

                <DrawerClose
                  asChild
                  className="active:bg-zinc-100 active:dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 w-full text-start  font-medium rounded-2xl p-3">
                  <Link href="https://github.com/ferdianfariza/Sonarkode.com"  target="_blank"
                  rel="noopener noreferrer" className="flex items-center gap-2">
                    <span>GitHub</span>

                    <span className="px-1.5 text-[12px] rounded-sm bg-purple-500  text-white dark:text-black">Docs</span>
                  </Link>
                </DrawerClose>
                <DrawerClose
                  asChild
                  className="active:bg-zinc-100 active:dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 w-full text-start  font-medium rounded-2xl p-3 mb-5">
                  <Link href="https://www.linkedin.com/in/ferdian-nur-fariza-651965273/"  target="_blank"
                  rel="noopener noreferrer" className="flex items-center gap-2">
                    <span>LinkedIn</span>
                    <span className="px-1.5  text-[12px] rounded-sm   bg-blue-500  text-white  dark:text-black">Author</span>
                  </Link>
                </DrawerClose>
                
                <div className="w-full flex justify-between text-xs font-sans p-3">
                  <div className="text-zinc-500 flex-col space-y-1.5">
                    <div>Designed and Engineered by</div>
                    <div>Sonarkode Blog</div>
                  </div>
                  <div>
                    <Link href="/">
                        <Icons.icon className="h-auto w-7 text-zinc-500" />
                    </Link>
                  </div>
                </div>
              </div>
            </DrawerHeader>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}
