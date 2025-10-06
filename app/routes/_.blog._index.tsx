import type { Route } from "./+types/_.blog._index";
import {
  useLoaderData,
  useRouteLoaderData,
  type LoaderFunction,
} from "react-router";
import Markdown from "~/components/Markdown";
import Link from "~/components/Link";
import Card from "~/components/Card";
import articlesLoader from "~/loaders/articlesLoader";

export const loader: LoaderFunction = articlesLoader;

export default function Blog({}) {
  const { page = {} } = useRouteLoaderData("routes/_");
  const articles = useLoaderData();

  if (!articles) return null;

  return (
    <div className="site-container md:pt-12 pt-8">
      <Markdown
        className="markdown-content"
        content={page.content}
        overrides={{
          h1: {
            props: {
              className: "h2 text-pretty text-center mb-12",
            },
          },
        }}
      />
      <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
        {articles.map((record: any) => (
          <Card key={record.id} tags={false} record={record} />
        ))}
      </div>
    </div>
  );
}
