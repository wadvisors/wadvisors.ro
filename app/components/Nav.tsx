import { NavLink, useRouteLoaderData } from "react-router";
import Button from "./Button";
import LangSwitcher from "./LangSwitcher";

export default function Nav() {
  const { language, user } = useRouteLoaderData("root");
  const { pages } = useRouteLoaderData("routes/_");

  return (
    <div className="top-0 sticky w-full z-30">
      <div className="py-10 relative">
        <div className="relative flex w-full site-container justify-between items-center z-20">
          <nav className="flex">
            <a
              className="primary-focus shrink-0"
              href={`/?lang=${language}`}
              aria-label="W Advisors"
            >
              <img
                src="/wadvisors.svg"
                className="w-auto h-24 justify-self-center mr-14"
                alt="W Advisors"
              />
            </a>

            <ul className="hidden md:flex gap-5 self-center">
              {pages.map(
                ({
                  id,
                  handle,
                  title,
                }: {
                  id: number;
                  handle: string;
                  title: string;
                }) => (
                  <li key={id}>
                    <NavLink
                      viewTransition={true}
                      to={{
                        pathname: `/${handle}`,
                        search: `lang=${language}`,
                      }}
                      className="flex w-full font-mono items-center text-base-500 [.active]:text-base-950 [.active]:font-bold"
                    >
                      {title}
                    </NavLink>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <div className="flex gap-8">
            <LangSwitcher />
            <Button variant="primary" href={`/contact/?lang=${language}`}>
              Contact
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute backdrop-blur-lg mask-b-from-50% top-0 left-0 w-full h-full z-0 bg-gradient-to-b from-white to-transparent "></div>
    </div>
  );
}
