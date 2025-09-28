import Tags from "./Tags";

interface CardProps {
  tags: boolean;
  record: {
    id: number;
    title: string;
    publish_at: string;
    cover: {
      path: string;
    };
    tags: [];
  };
}

export default function Card({ record, tags = false }: CardProps) {
  const date = new Date(record.publish_at);
  const dateFormated = new Intl.DateTimeFormat("en-US").format(date);

  return (
    <article className="relative flex text-center  flex-col space-y-4 transition-opacity hover:not-tag-hover:opacity-80">
      <a className="after:absolute after:inset-0 after:z-10" href="/link/">
        <h3 className="text-2xl font-heading-1 text-pretty mt-2">
          {record.title}
        </h3>
      </a>
      <picture className="block overflow-hidden order-first">
        <img
          className="m-0 p-0"
          loading="lazy"
          src={`/api/_plugin/image/optimize/${encodeURIComponent(record.cover.path)}?width=720&fit=scale-down`}
        />
        <time
          className="block mt-4 font-monot text-neutral-500"
          dateTime={record.publish_at}
        >
          {dateFormated}
        </time>
      </picture>

      <span className="text-primary-500 underline">Read more</span>
      {tags && (
        <div className="flex items-start gap-x-6">
          <Tags tags={record.tags} />
        </div>
      )}
    </article>
  );
}
