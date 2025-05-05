import { allPages } from "contentlayer/generated";
import Mdx from "@/app/components/mdx-components";

export default function About() {
  const page = allPages.find((p) => p._raw.flattenedPath === "pages/about");

  if (!page) return <div>Not found</div>;

  return (
    <div className="mx-auto max-w-2xl py-8">
      <h1 className="text-2xl font-bold mb-4">{page.title}</h1>
      <Mdx code={page.body.code} />
    </div>
  );
}
