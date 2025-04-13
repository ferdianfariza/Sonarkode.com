import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { allPosts } from "contentlayer/generated";
import { useParams } from "next/navigation";

export default function AvatarText() {
  const params = useParams(); // ensure params dengan useParams
  const slug = params.slug as string; // ensure slug as a string
  const post = allPosts.find((post) => post._raw.flattenedPath === slug);

  if (!post?.body.code) {
    return <div>No post here!</div>;
  }
  return (
    <p className="font-normal text-[16px] flex items-center gap-1 capitalize">
      <Avatar>
        <AvatarImage src="https://github.com/ferdianfariza.png" />
        <AvatarFallback>FF</AvatarFallback>
      </Avatar>
      {post.author}
    </p>
  );
}
