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

export const loader: LoaderFunction = featuredArticlesLoader;

export default function Index() {
  const { page } = useRouteLoaderData("routes/_");
  const { featuredArticles } = useLoaderData();

  return (
    <>
      <Hero cover={page.cover.path} />
      <FeaturedArticles articles={featuredArticles} />
      <div className="site-container markdown-content mx-auto p-4 md:pt-12 pt-8">
        <Markdown content={page.content} />
      </div>
    </>
  );
}
