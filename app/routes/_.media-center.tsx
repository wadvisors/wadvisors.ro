import type { Route } from "./+types/_.media-center";
import { slugify } from "bknd/utils";
import {
  useRouteLoaderData,
  useLoaderData,
  type LoaderFunction,
} from "react-router";
import pressLoader from "~/loaders/pressLoader";
import Markdown from "~/components/Markdown";
import { TbFileTypePdf } from "react-icons/tb";

export const loader: LoaderFunction = pressLoader;

export default function Generic() {
  const { page = {} } = useRouteLoaderData("routes/_");
  const { press } = useLoaderData();

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

      <ol className="flex flex-col gap-4 mt-8 space-y-12 mt-12">
        {press.map(
          ({
            id,
            cover,
            document,
            title,
            location,
            publish_at,
            content,
          }: any) => {
            const { language } = useRouteLoaderData("routes/_");
            const date = new Date(publish_at);
            const dateFormated = new Intl.DateTimeFormat(language, {
              dateStyle: "full",
            }).format(date);

            return (
              <li key={id} className="flex gap-12">
                <img
                  className="m-0 p-0 w-1/4 self-start rounded shadow"
                  loading="lazy"
                  src={`/api/_plugin/image/optimize/${encodeURIComponent(cover.path)}?width=720&height=540&fit=cover`}
                />
                <div>
                  <span className="text-base-400 text-sm">
                    {location},{" "}
                    <time dateTime={publish_at}>{dateFormated}</time>
                  </span>
                  <h2 className="text-xl font-heading-1 text-balance mt-2 text-base-900">
                    {title}
                  </h2>
                  <p className="mt-4">{content}</p>

                  {document?.path && (
                    <a
                      className="flex gap-2 mt-6 items-center font-mono hover:underline"
                      href={`/api/media/file/${document?.path}`}
                      download={slugify(title)}
                    >
                      <TbFileTypePdf className="h-5 w-5" />
                      Download
                    </a>
                  )}
                </div>
              </li>
            );
          },
        )}
      </ol>
    </div>
  );
}
