export default function Gallery({ gallery = [] }) {
  if (!gallery.length) return null;

  const chunkSize = 3;
  const chunks = [];

  for (let i = 0; i < gallery.length; i += chunkSize) {
    chunks.push(gallery.slice(i, i + chunkSize));
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-4 w-full">
      {chunks.map((group) => {
        return (
          <div className="grid gap-4">
            {group.map((img: any) => (
              <div>
                <img
                  key={img.path}
                  className="h-auto max-w-full rounded-lg grayscale hover:grayscale-0 cursor-pointer"
                  loading="lazy"
                  src={`/api/_plugin/image/optimize/${encodeURIComponent(img.path)}?width=512&fit=scale-down`}
                />
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
