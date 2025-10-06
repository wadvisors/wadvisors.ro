import type { Route } from "./+types/_.case-studies.$id";
import { type LoaderFunction, useLoaderData } from "react-router";
import Markdown from "~/components/Markdown";
import Gallery from "~/components/Gallery";
import ArticleMeta from "~/components/ArticleMeta";
import Tags from "~/components/Tags";

import articleLoader from "~/loaders/articleLoader";

export function meta({ loaderData }: Route.MetaArgs) {
  return [
    { title: `W Advisors - ${loaderData?.title}` },
    { name: "description", content: loaderData?.content },
  ];
}

export const loader: LoaderFunction = articleLoader;

export default function Article() {
  const articleLoader = useLoaderData();
  if (!articleLoader) return null;

  const { title, content, gallery, team, tags, publish_at } = articleLoader;

  return (
    <div className="site-container md:pt-12 pt-8">
      <h1 className="h2 text-pretty text-center mb-12">{title}</h1>
      <ArticleMeta
        className="mx-auto"
        author={team}
        publish_at={publish_at}
        content={content}
      />
      <Markdown className="markdown-content" content={content} />
      <Tags className="mt-10" tags={tags} />
      <Gallery className="mt-10" gallery={gallery} />
    </div>
  );
}
