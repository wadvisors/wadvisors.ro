import type { Route } from "./+types/_.$handle";
import { useRouteLoaderData } from "react-router";
import Markdown from "~/components/Markdown";

export default function Generic() {
  const { page = {} } = useRouteLoaderData("routes/_");

  return (
    <div className="container max-w-4xl mx-auto p-4 md:pt-12 pt-8">
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
    </div>
  );
}
