import type { ComponentPropsWithoutRef, ReactNode } from "react";
import type { Route } from "./+types/_.portfolio.$handle";
import {
  useRouteLoaderData,
  useLoaderData,
  type LoaderFunction,
} from "react-router";
import Markdown from "~/components/Markdown";
import Link from "~/components/Link";
import Tags from "~/components/Tags";
import clientLoader from "~/loaders/clientLoader";

export const loader: LoaderFunction = clientLoader;

export function meta({}: Route.MetaArgs) {
  const { client } = useRouteLoaderData("routes/_.portfolio.$handle");

  return [
    { title: `W Advisors - ${client.title}` },
    { name: "description", content: client.content },
  ];
}

type H1WithExtraProps = ComponentPropsWithoutRef<"h1"> & {
  children: ReactNode;
};

function H1WithExtra({ children, ...props }: H1WithExtraProps) {
  const { client } = useLoaderData();

  if (!client) return null;

  const { title, logo, tags } = client;

  return (
    <div>
      <figure className="w-full md:w-1/3 h-auto float-left md:mr-8 mb-4">
        <img
          alt={title}
          className="m-0 p-0 self-start border-none"
          loading="lazy"
          src={`/api/_plugin/image/optimize/${encodeURIComponent(logo.path)}?width=512&height=244&fit=scale-down`}
        />
      </figure>
      <h1 {...props}>{children}</h1>
      <Tags tags={tags} />
    </div>
  );
}

export default function Index() {
  const { client } = useLoaderData();

  if (!client) return null;

  const { content } = client;

  return (
    <div className="container max-w-4xl mx-auto p-4 md:pt-12 pt-8">
      <Markdown
        className="markdown-content"
        content={content}
        overrides={{
          h1: {
            component: H1WithExtra,
            props: {
              className: "uppercase h2 text-pretty text-left",
            },
          },
        }}
      />
    </div>
  );
}
