import { allPages } from "contentlayer/generated";
import Mdx from "@/app/components/mdx-components";

import { SiteHeader } from "../components/site-header";
import HomeFooter from "../components/site-footer";

export default function About() {
  const page = allPages.find(
    (page) => page._raw.flattenedPath === "pages/sponsorship"
  );

  if (!page) return <div>Not found</div>;

  return (
    <div>
      <SiteHeader />
      <div className="py-8 mx-4 md:mx-auto max-w-2xl">
      <h1>FAQ dengan Accordion</h1>
      <h1>Card dengan contoh posisi iklan</h1>
      <h1>Promo Students</h1>
        <Mdx code={page.body.code} />
      </div>
      <HomeFooter />
    </div>
  );
}
