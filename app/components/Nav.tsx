import { useState, useEffect } from "react";
import {
  NavLink,
  useRouteLoaderData,
  useLoaderData,
  useLocation,
} from "react-router";
import { TbMenuDeep, TbX } from "react-icons/tb";
import Button from "./Button";
import LangSwitcher from "./LangSwitcher";

export function Navs() {
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

export default function Nav() {
  const { language, user } = useRouteLoaderData("root");
  const { pages } = useRouteLoaderData("routes/_");

  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location]);

  const toggleMenu = () => setOpen((prev) => !prev);

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

            <nav
              aria-label="Sidebar navigation"
              className="relative flex items-center"
            >
              <ol
                className={`
          ${open ? "visible md:bg-white/80 backdrop-blur-md md:bg-none motion-opacity-in-0 h-full top-36 motion-translate-y-in-50 flex-col text-center" : "hidden md:flex top-auto md:self-center"}
          fixed mt-0 top-0 left-0 right-0 p-8 z-20
          md:visible md:relative md:translate-none flex md:flex-row md:p-0 md:mx-0 gap-5 md:gap-2`}
              >
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
              </ol>
            </nav>
          </nav>

          <div className="flex gap-8">
            <LangSwitcher />
            <Button
              variant="primary"
              className="hidden md:block"
              href={`/contact/?lang=${language}`}
            >
              Contact
            </Button>

            <button type="button" className="md:hidden" onClick={toggleMenu}>
              {open ? (
                <TbX className="text-3xl  text-neutral-950" />
              ) : (
                <TbMenuDeep className="text-3xl  text-neutral-950" />
              )}
            </button>
          </div>
        </div>
      </div>
      <div className="absolute backdrop-blur-lg mask-b-from-50% top-0 left-0 w-full h-full z-0 bg-gradient-to-b from-white to-transparent "></div>
    </div>
  );
}
