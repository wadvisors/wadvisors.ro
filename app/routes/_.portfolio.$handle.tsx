import type { ComponentPropsWithoutRef, ReactNode } from "react";
import type { Route } from "./+types/_.portfolio.$handle";
import {
  useRouteLoaderData,
  useLoaderData,
  type LoaderFunction,
} from "react-router";
import Markdown from "~/components/Markdown";
import Tags from "~/components/Tags";
import Gallery from "~/components/Gallery";
import clientLoader from "~/loaders/clientLoader";

export const loader: LoaderFunction = clientLoader;

export function meta({}: Route.MetaArgs) {
  const { client } = useRouteLoaderData("routes/_.portfolio.$handle");

  return [
    { title: `W Advisors - ${client.title}` },
    { name: "description", content: client.content },
  ];
}

type H2WithExtraProps = ComponentPropsWithoutRef<"h2"> & {
  children: ReactNode;
};

function H2WithExtra({ children, ...props }: H2WithExtraProps) {
  const { client } = useLoaderData();

  if (!client) return null;

  const { tags } = client;

  return (
    <>
      <h2 {...props}>{children}</h2>
      <Tags tags={tags} />
    </>
  );
}

export default function Index() {
  const { client } = useLoaderData();

  if (!client) return null;

  const { content, title, logo, gallery } = client;

  return (
    <div className="container max-w-4xl mx-auto p-4 md:pt-12 pt-8">
      <figure className="flex items-center w-72 mx-auto mb-12">
        <img
          alt={title}
          className="border-none rounded-none mx-auto float-left h-auto self-start"
          loading="lazy"
          src={`/api/_plugin/image/optimize/${encodeURIComponent(logo.path)}?width=512&height=244&fit=scale-down`}
        />
      </figure>

      <Markdown
        className="markdown-content"
        content={content}
        overrides={{
          h2: {
            component: H2WithExtra,
          },
        }}
      />

      <Gallery gallery={gallery} />
    </div>
  );
}
