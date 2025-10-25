import { useRouteLoaderData } from "react-router";
import getSnippet from "~/utils/get-snippet";
import Tags from "./Tags";
import Link from "./Link";

interface CardProps {
  tags: boolean;
  className: string;
  imageAspectRatio?: "aspect-auto" | "aspect-video" | "aspect-square";
  record: {
    id: number;
    handle: string;
    title: string;
    publish_at: string;
    cover: {
      path: string;
    };
    tags: [];
  };
}

export default function Card({
  record,
  tags = false,
  className,
  imageAspectRatio = "aspect-auto",
}: CardProps) {
  const { language, snippets } = useRouteLoaderData("routes/_");

  const date = new Date(record.publish_at);
  const dateFormated = new Intl.DateTimeFormat(language, {
    dateStyle: "medium",
  }).format(date);

  return (
    <article
      className={`relative flex text-center flex-col space-y-4 transition-opacity hover:not-tag-hover:opacity-80 ${className}`}
    >
      <Link
        className="after:absolute after:inset-0 after:z-10"
        to={`/blog/${record.handle}`}
      >
        <h3 className="text-2xl font-heading-1 text-pretty mt-2">
          {record.title}
        </h3>
      </Link>
      <picture className="block overflow-hidden order-first">
        <div
          className={`${imageAspectRatio} flex items-center overflow-hidden`}
        >
          <img
            className="m-0 p-0"
            loading="lazy"
            src={`/api/_plugin/image/optimize/${encodeURIComponent(record.cover.path)}?width=720&fit=scale-down`}
          />
        </div>
        <time
          className="block mt-4 font-extralight text-neutral-500"
          dateTime={record.publish_at}
        >
          {dateFormated}
        </time>
      </picture>

      <span className="text-primary-500 underline">
        {getSnippet(snippets, "cta-read-more")}
      </span>
      {tags && (
        <div className="flex items-start gap-x-6">
          <Tags tags={record.tags} />
        </div>
      )}
    </article>
  );
}
