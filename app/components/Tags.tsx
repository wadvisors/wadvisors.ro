export default function Tags({ tags = [] }) {
  if (!tags.length) return null;

  return (
    <ol className="flex flex-wrap gap-3 items-start m-0">
      {tags.map((t: string) => (
        <small
          key={t}
          className="bg-primary-950 text-white px-2 inline-block font-mono"
        >
          {t}
        </small>
      ))}
    </ol>
  );
}
