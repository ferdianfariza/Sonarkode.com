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
                  className="hover:bg-foreground/10 w-full text-start rounded-md p-2">
                  <Link href="./">Home</Link>
                </DrawerClose>
                <DrawerClose
                  asChild
                  className="hover:bg-foreground/10 w-full text-start rounded-md p-2">
                  <Link href="./sponsorship">Sponsorship</Link>
                </DrawerClose>
                <DrawerClose
                  asChild
                  className="hover:bg-foreground/10 w-full text-start rounded-md p-2">
                  <Link href="./about">About</Link>
                </DrawerClose>
                <Separator className="m-2" />
                <DrawerClose
                  asChild
                  className="hover:bg-foreground/10 text-foreground/70 w-full text-start rounded-md p-2">
                  <Link href="./">LinkedIn</Link>
                </DrawerClose>
                <DrawerClose
                  asChild
                  className="hover:bg-foreground/10 text-foreground/70 w-full text-start rounded-md p-2">
                  <Link href="./">Instagram</Link>
                </DrawerClose>
                <DrawerClose
                  asChild
                  className="hover:bg-foreground/10 text-foreground/70 w-full text-start rounded-md p-2">
                  <Link href="./">GitHub</Link>
                </DrawerClose>
              </div>
            </DrawerHeader>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}
