import type { Route } from "./+types/_._index";
import { useRouteLoaderData, type LoaderFunction } from "react-router";
import Markdown from "~/components/Markdown";
import Hero from "~/components/Hero";
import splitMarkdown from "~/utils/split-markdown";

export default function Index() {
  const { page } = useRouteLoaderData("routes/_");
  const { first, rest } = splitMarkdown(page.content);

  return (
    <>
      <Hero cover={page.cover.path} content={first} />
      <div className="site-container markdown-content mx-auto p-4 md:pt-12 pt-8">
        <Markdown content={rest} />
      </div>
    </>
  );
}
