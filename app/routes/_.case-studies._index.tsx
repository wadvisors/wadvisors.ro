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
      <div className="grid grid-cols-4">
        {showcases.length
          ? showcases.map((el) => {
              return (
                <article
                  key={el.id}
                  className="shadow flex flex-col rounded-lg overflow-hidden items-center"
                >
                  <picture className="aspect-square overflow-hidden flex items-center bg-base-50/50 w-36 absolute m-4 rounded-full p-3 shadow backdrop-blur-lg">
                    <img
                      className="m-0 p-0 w-full h-auto"
                      loading="lazy"
                      src={`/api/_plugin/image/optimize/${encodeURIComponent(el.clients.logo.path)}?width=720&fit=scale-down`}
                    />
                  </picture>

                  <header className="m-4 order-last w-full p-4 flex flex-col items-start">
                    <strong className="font-light text-sm text-base-300">
                      {el.clients.title}
                    </strong>
                    <h3 className="font-heading-1 text-xl mt-0 m-0 text-pretty">
                      {el.title}
                    </h3>
                    <a className="button--outline button group gap-2 inline-flex text-sm mt-4">
                      Details
                    </a>
                  </header>
                  <picture className="aspect-video overflow-hidden flex items-center bg-base-50">
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
