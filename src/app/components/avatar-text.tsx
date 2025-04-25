import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { allPosts } from "contentlayer/generated";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function AvatarText() {
  const params = useParams(); // ensure params dengan useParams
  const slug = params.slug as string; // ensure slug as a string
  const post = allPosts.find((post) => post._raw.flattenedPath === slug);

  if (!post?.body.code) {
    return <div>No post here!</div>;
  }
  return (
    <Link
      href="https://www.instagram.com/ferdianfariza/"
      target="_blank" // Open external links in new tab
      rel="noopener noreferrer" // Security measure for target="_blank"
      className="font-normal text-[16px] flex items-center gap-2 p-1 rounded-md hover:bg-zinc-100 transition-colors duration-200 dark:hover:bg-zinc-900">
      <Avatar className="size-7">
        <AvatarImage src="https://github.com/ferdianfariza.png" />
        <AvatarFallback>FF</AvatarFallback>
      </Avatar>
      <div className="text-[15px] gap-y-[1px]">
        <p className="font-semibold">{post.author}</p>
        <p className="font-regular text-[14px]">@ferdianfariza</p>
      </div>
    </Link>
  );
}
