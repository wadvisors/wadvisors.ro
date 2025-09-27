import { NavLink, useRouteLoaderData } from "react-router";

export default function Clients() {
  const { clients } = useRouteLoaderData("routes/_._index");

  if (!clients.length) return null;

  return (
    <ol className="grid md:grid-cols-8 list-none p-0 m-0 items-center gap-8">
      {clients.map(({ id, title, logo }: any) => {
        if (!logo.path) return;

        return (
          <li
            key={id}
            className="flex flex-col gap-4 items-center align-center p-0"
          >
            <figure>
              <img
                alt={title}
                className="m-0 p-0 self-start border-none grayscale hover:grayscale-0 cursor-pointer w-auto h-full"
                loading="lazy"
                src={`/api/_plugin/image/optimize/${encodeURIComponent(logo?.path)}?width=512&height=244&fit=scale-down`}
              />
            </figure>
          </li>
        );
      })}
    </ol>
  );
}
