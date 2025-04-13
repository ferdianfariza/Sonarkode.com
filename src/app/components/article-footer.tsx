import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { VscVerifiedFilled } from "react-icons/vsc";

const author = {
  name: "Ferdian Fariza",
  avatarUrl: "https://github.com/ferdianfariza.png",
  bioLine1:
    "While I primarily blog for my benefit, I hope that the stuff I write may be of some value to you the reader!",
  bioLine2: "Happy Coding!🧑‍💻",
};

export default function ArticleFooter() {
  const fallbackInitials =
    author.name
      .split(" ")
      .map((n) => n[0])
      .join("") || "??";

  return (
    <div className="flex flex-col items-left md:items-center mt-10">
      {/* Avatar */}
      <Avatar className="w-20 h-20 border-2">
        <AvatarImage src={author.avatarUrl} alt={`Avatar of ${author.name}`} />
        <AvatarFallback>{fallbackInitials}</AvatarFallback>
      </Avatar>

      <div className="flex flex-row items-left md:items-center mt-4 gap-1.5">
        <h2 className="text-xl font-semibold tracking-tight">
          Written by {author.name}
        </h2>
        <VscVerifiedFilled className="text-blue-500 shrink-0" size={18} />
      </div>

      <p className="mt-4 text-left md:items-center text-[16px] text-foreground/70 max-w-xs">
        {author.bioLine1}
      </p>
      <p className="mt-2 text-left md:items-center text-[16px] text-foreground/70 max-w-xs">
        {author.bioLine2}
      </p>
    </div>
  );
}
