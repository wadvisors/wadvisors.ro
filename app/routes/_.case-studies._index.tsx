import type { Route } from "./+types/_.case-studies._index";
import { useLoaderData } from "react-router";
import { useRouteLoaderData, type LoaderFunction } from "react-router";
import Markdown from "~/components/Markdown";
import caseStudiesLoader from "~/loaders/caseStudiesLoader";

export const loader: LoaderFunction = caseStudiesLoader;

export default function Blog() {
  const { page = {} } = useRouteLoaderData("routes/_");
  const { showcases } = useLoaderData();

  return (
    <div className="site-container md:pt-12 pt-8">
      <Markdown
        className="markdown-content"
        content={page.content}
        overrides={{
          h1: {
            props: {
              className: "uppercase h2 text-pretty text-center mb-12",
            },
          },
        }}
      />
      <pre>{JSON.stringify(showcases, null, 2)}</pre>
    </div>
  );
}
