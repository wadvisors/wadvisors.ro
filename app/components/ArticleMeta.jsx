import { useRouteLoaderData } from "react-router";
import estimateReadingTime from "../utils/estimate-reading-time";

export default function ArticleMeta({
  className,
  author = {},
  publish_at = "",
  content = "",
}) {
  const { language } = useRouteLoaderData("routes/_");
  const date = new Date(publish_at);
  const dateFormated = new Intl.DateTimeFormat(language, {
    dateStyle: "medium",
  }).format(date);

  return (
    <div
      className={`${className} mx-auto flex items-center mb-12 gap-12 justify-center`}
    >
      <div className="flex items-center gap-8">
        <picture className="w-16 aspect-square overflow-hidden flex items-center rounded-full grayscale">
          <img
            className="m-0 p-0 w-full"
            loading="lazy"
            src={`/api/_plugin/image/optimize/${encodeURIComponent(author.avatar.path)}?width=512&fit=scale-down`}
          />
        </picture>
        {author && (
          <span className="flex flex-col normal">
            <strong className="tracking-wide">{author.name}</strong>
            <span className="text-base-300">{author.position}</span>
          </span>
        )}
      </div>
      <div className="w-[1px] bg-base-100 h-8"></div>
      <div className="font-mono text-neutral-500">
        <time className="block   oldstyle-nums" dateTime={publish_at}>
          {dateFormated}
        </time>
        {estimateReadingTime(content)}
      </div>
    </div>
  );
}
