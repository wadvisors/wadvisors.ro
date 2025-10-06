import type { Route } from "./+types/_.case-studies._index";
import { useLoaderData } from "react-router";
import { useRouteLoaderData, type LoaderFunction } from "react-router";
import Markdown from "~/components/Markdown";
import Link from "~/components/Link";
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
              className: "h2 text-pretty text-center mb-12",
            },
          },
        }}
      />
      <div className="grid grid-cols-4 gap-8">
        {showcases.length
          ? showcases.map((el) => {
              return (
                <article
                  key={el.id}
                  className="shadow flex flex-col rounded-lg overflow-hidden items-center relative bg-base-50/50"
                >
                  <header className="order-last w-full p-4 flex flex-col items-start">
                    <strong className="font-extralight text-xs text-base-300">
                      {el.clients.title}
                    </strong>
                    <h3 className="font-heading-1 text-xl mt-0 m-0 text-pretty">
                      {el.title}
                    </h3>
                    <Link
                      to={`/case-studies/${el.id}`}
                      className="button--secondary button group gap-2 inline-flex text-sm mt-2 hover:underline"
                    >
                      Show more &rarr;
                    </Link>
                  </header>
                  <picture className="aspect-video overflow-hidden flex justify-center items-center bg-base-50 border-b border-b-base-50 relative">
                    <picture className="aspect-video overflow-hidden flex items-center bg-base-50/50 w-32 absolute rounded-lg p-2 backdrop-blur-md border-b">
                      <img
                        className="m-0 p-0 w-full h-auto"
                        loading="lazy"
                        src={`/api/_plugin/image/optimize/${encodeURIComponent(el.clients?.logo?.path)}?width=350&fit=scale-down`}
                      />
                    </picture>

                    <img
                      className="m-0 p-0 w-full h-auto"
                      loading="lazy"
                      src={`/api/_plugin/image/optimize/${encodeURIComponent(el.cover.path)}?width=720&fit=scale-down`}
                    />
                  </picture>
                </article>
              );
            })
          : null}
      </div>
    </div>
  );
}
