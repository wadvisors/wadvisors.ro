import { useRouteLoaderData } from "react-router";
import Link from "~/components/Link";

export default function Clients() {
  const { clients = [] } = useRouteLoaderData("routes/_");

  if (!clients?.length) return null;

  return (
    <ol className="flex gap-4 md:gap-8 list-none p-0 m-0 items-center overflow-scroll snap-x snap-mandatory">
      {clients.map(({ id, handle, title, logo }: any) => {
        if (!logo?.path) return;

        return (
          <li
            key={id}
            className="snap-start w-1/4 md:w-1/10 flex-shrink-0 md:flex-shrink-1 gap-4 items-center align-center p-0"
          >
            <Link to={`/portfolio/${handle}`}>
              <figure>
                <img
                  alt={title}
                  className="m-0 p-0 self-start border-none grayscale hover:grayscale-0 cursor-pointer w-auto h-auto"
                  loading="lazy"
                  src={`/api/_plugin/image/optimize/${encodeURIComponent(logo?.path)}?width=512&height=244&fit=scale-down`}
                />
              </figure>
            </Link>
          </li>
        );
      })}
    </ol>
  );
}
