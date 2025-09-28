export default function Tags({ tags = [] }) {
  if (!tags.length) return null;

  return (
    <ol className="flex flex-wrap gap-2 m-0">
      {tags.map((t: string) => (
        <li key={t}>
          <small className="bg-neutral-100 text-neutral-400 px-2 rounded-full block font-mono font-extralight">
            {t}
          </small>
        </li>
      ))}
    </ol>
  );
}
