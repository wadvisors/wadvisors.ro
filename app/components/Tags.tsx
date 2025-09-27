export default function Tags({ tags = [] }) {
  if (!tags.length) return null;

  return (
    <ol className="flex gap-3 items-start">
      {tags.map((t: string) => (
        <small key={t} className="text-primary-700 bg-primary-100 rounded px-2">
          {t}
        </small>
      ))}
    </ol>
  );
}
