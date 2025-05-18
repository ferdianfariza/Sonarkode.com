import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";


export default function AvatarText() {
  return (
    <Link
      href="https://www.instagram.com/ferdianfariza/"
      target="_blank" // Open external links in new tab
      rel="noopener noreferrer" // Security measure for target="_blank"
      className="font-normal text-[16px] flex items-center gap-1.5 p-1 rounded-md hover:bg-zinc-100 transition-colors duration-200 dark:hover:bg-zinc-900">
      <Avatar className="size-5">
        <AvatarImage src="https://github.com/ferdianfariza.png" />
        <AvatarFallback>FF</AvatarFallback>
      </Avatar>
      <div className="text-[15px] gap-y-[1px]">
        <p className="font-normal">Ferdian Fariza</p>
      </div>
    </Link>
  );
}
