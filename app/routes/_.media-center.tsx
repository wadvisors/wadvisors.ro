import type { Route } from "./+types/_.media-center";
import { slugify } from "bknd/utils";
import {
  useRouteLoaderData,
  useLoaderData,
  type LoaderFunction,
} from "react-router";
import pressLoader from "~/loaders/pressLoader";
import Markdown from "~/components/Markdown";
import { TbFileDownload } from "react-icons/tb";

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

      <ol className="flex flex-col gap-4 mt-8">
        {press.map(({ id, cover, document, title, content }: any) => {
          return (
            <li key={id} className="flex gap-8">
              <img
                className="m-0 p-0 w-1/4 self-start rounded shadow"
                loading="lazy"
                src={`/api/_plugin/image/optimize/${encodeURIComponent(cover.path)}?width=720&height=540&fit=cover`}
              />
              <div>
                <h2 className="h3 normal-case font-mono">{title}</h2>
                <p className="mt-4">{content}</p>

                {document?.path && (
                  <a
                    className="flex gap-2 mt-4 items-center font-mono hover:underline"
                    href={`/api/media/file/${document?.path}`}
                    download={slugify(title)}
                  >
                    <TbFileDownload className="h-5 w-5" />
                    Download
                  </a>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
