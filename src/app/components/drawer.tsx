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
import { House, CircleUserRound, Megaphone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

export default function Logo() {
  return (
    <div className="flex items-center justify-start">
      <div className="hidden md:inline-flex lg:inline-flex">
        <Link href="/">
          <Icons.logo className="h-auto w-32 text-blue-500" />
        </Link>
      </div>
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
              <div className="p-2 flex-col flex items-start">
                <DrawerTitle> </DrawerTitle>
                <DrawerClose
                  asChild
                  className="hover:bg-foreground/15 w-full text-start rounded-sm p-2">
                  <Link href="/" className="flex items-center gap-1.5">
                    <span>
                      <House size="23" />
                    </span>
                    <span>Home</span>
                  </Link>
                </DrawerClose>
                <DrawerClose
                  asChild
                  className="hover:bg-foreground/15 w-full text-start rounded-md p-2">
                  <Link
                    href="/sponsorship"
                    className="flex items-center gap-1.5">
                    <span>
                      <Megaphone size="23" />
                    </span>
                    <span>Sponsorship</span>
                  </Link>
                </DrawerClose>
                <DrawerClose
                  asChild
                  className="hover:bg-foreground/15 w-full text-start rounded-md p-2">
                  <Link href="/about" className="flex items-center gap-1.5">
                    <span>
                      <CircleUserRound size="23" />
                    </span>
                    <span>About</span>
                  </Link>
                </DrawerClose>
                <Separator className="m-2" />
                <DrawerClose
                  asChild
                  className="hover:bg-foreground/10 text-foreground/70 w-full text-start rounded-md p-2">
                  <Link
                    href="https://github.com/ferdianfariza"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5">
                    <span>
                      <FaGithub size="23" />
                    </span>
                    <span>GitHub</span>
                  </Link>
                </DrawerClose>
                <DrawerClose
                  asChild
                  className="hover:bg-foreground/10 text-foreground/70 w-full text-start rounded-md p-2">
                  <Link
                    href="https://www.linkedin.com/in/ferdian-nur-fariza-651965273/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5">
                    <span>
                      <FaLinkedin size="23" />
                    </span>
                    <span>LinkedIn</span>
                  </Link>
                </DrawerClose>
                <DrawerClose
                  asChild
                  className="hover:bg-foreground/10 text-foreground/70 w-full text-start rounded-md p-2">
                  <Link
                    href="https://www.instagram.com/ferdianfariza/"
                    className="flex items-center gap-1.5"
                    target="_blank"
                    rel="noopener noreferrer">
                    <span>
                      <FaInstagram size="23" />
                    </span>
                    <span>Personal Instagram</span>
                  </Link>
                </DrawerClose>
              </div>
            </DrawerHeader>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}
