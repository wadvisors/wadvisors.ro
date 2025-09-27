import { useRouteLoaderData } from "react-router";

interface MemberProps {
  id: number;
  name: string;
  position: string;
  bio: string;
  avatar: {
    path: string;
  };
}

export default function Team({}) {
  const { team } = useRouteLoaderData("routes/_");

  if (!team?.length) return null;

  return (
    <div className="py-4 my-4">
      <ol className="p-0 grid gap-8 mx-auto">
        {team.map(({ id, name, position, bio, avatar }: MemberProps) => {
          return (
            <li
              key={id}
              className="p-0 m-0 list-none flex md:gap-12 [&:nth-child(even)_img]:order-last"
            >
              <img
                className="m-0 p-0 w-1/3 self-start shadow"
                loading="lazy"
                src={`/api/_plugin/image/optimize/${encodeURIComponent(avatar.path)}?width=720&height=1080&fit=cover`}
              />
              <div className="px-8 self-center">
                <h3 className="my-0">{name}</h3>

                <strong className="block mb-4 text-primary-400 font-light">
                  {position}
                </strong>
                <p
                  className="font-mono text-primary-800 text-pretty
                  first-letter:font-serif
                  first-letter:text-6xl
                  first-letter:mr-2
                  first-letter:-mb-2
                  first-letter:font-extralight
                  first-letter:float-left"
                >
                  {bio}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
