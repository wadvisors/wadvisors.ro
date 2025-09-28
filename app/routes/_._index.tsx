import type { Route } from "./+types/_._index";
import {
  useRouteLoaderData,
  useLoaderData,
  type LoaderFunction,
} from "react-router";
import Markdown from "~/components/Markdown";
import Hero from "~/components/Hero";
import FeaturedArticles from "~/components/FeaturedArticles";
import featuredArticlesLoader from "~/loaders/featuredArticlesLoader";

import splitMarkdown from "~/utils/split-markdown";

export const loader: LoaderFunction = featuredArticlesLoader;

export default function Index() {
  const { page } = useRouteLoaderData("routes/_");
  const featuredArticles = useLoaderData();
  const { first, rest } = splitMarkdown(page.content);

  return (
    <>
      <Hero cover={page.cover.path} content={first} />
      <pre>{JSON.stringify(featuredArticles, null, 2)}</pre>
      <FeaturedArticles />
      <div className="site-container markdown-content mx-auto p-4 md:pt-12 pt-8">
        <Markdown content={rest} />
      </div>
    </>
  );
}
