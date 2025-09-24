import type { Route } from "./+types/_._index";
import { useRouteLoaderData } from "react-router";
import { type LoaderFunction } from "react-router";
import Markdown from "~/components/Markdown";
import Hero from "~/components/Hero";
import splitMarkdown from "~/utils/split-markdown";
import teamLoader from "~/loaders/teamLoader";

export const loader: LoaderFunction = teamLoader;

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
