import { NavLink, useRouteLoaderData } from "react-router";

import SiteLogo from "./SiteLogo";
import Button from "./Button";
import LangSwitcher from "./LangSwitcher";

export default function Nav() {
  const { language, user } = useRouteLoaderData("root");
  const { pages } = useRouteLoaderData("routes/_");

  return (
    <div className="top-0 sticky w-full z-30">
      <div className="pt-10 relative">
        <div className="relative flex w-full site-container justify-between items-center z-20">
          <nav className="hidden md:flex w-1/3">
            <ul className="flex gap-8">
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
                        pathname: handle === "home" ? "/" : `/${handle}`,
                        search: `lang=${language}`,
                      }}
                      className="nav__link--base flex w-full items-center"
                    >
                      {title}
                    </NavLink>
                  </li>
                ),
              )}
            </ul>
          </nav>
          <a
            className="primary-focus shrink-0"
            href="/"
            aria-label="W Advisors"
          >
            <img
              src="/wadvisors.svg"
              className="w-auto h-24 justify-self-center mx-14"
              alt="W Advisors"
            />
          </a>
          <div className="w-1/3 flex justify-end">
            <div className="flex gap-8">
              <LangSwitcher />
              <Button variant="secondary" href="/contact">
                Contact
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute backdrop-blur-lg mask-b-from-50% top-0 left-0 w-full h-full z-0 bg-gradient-to-b from-white to-transparent "></div>
      </div>
    </div>
  );

  return (
    <div className="hidden sticky top-0 left-0 z-30 flex w-full flex-col transition-[padding,background-color] duration-300 h-auto items-center justify-center">
      <div className="mx-auto flex w-full text-base-900">
        <div className="site-container flex w-full items-center">
          <header className="flex w-full items-center gap-2">
            {/*<!-- desktop nav menu -->*/}
            <div className="grid grid-cols-3 w-full items-center lg:gap-4 ">
              <nav className="hidden md:block w-full">
                <ul className="flex h-full items-center justify-center text-lg lg:gap-4">
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
                            pathname: handle === "home" ? "/" : `/${handle}`,
                            search:
                              language !== "en"
                                ? `lang=${language}`
                                : undefined,
                          }}
                          className="nav__link--base flex w-full items-center"
                        >
                          {title}
                        </NavLink>
                      </li>
                    ),
                  )}
                </ul>
              </nav>

              <a
                className="primary-focus mx-auto"
                href="/"
                aria-label="W Advisors"
              >
                <img
                  src="/wadvisors.svg"
                  className="w-auto h-32 mt-20"
                  alt="W Advisors"
                />
              </a>

              <div className="flex ml-auto">
                <LangSwitcher />
                <Button variant="secondary" href="/contact">
                  Contact
                </Button>
              </div>

              {/*<!-- mobile nav menu, only load on small screens where it is visible -->*/}
              {/*<div className="md:hidden">
						<MobileNav />
					</div>*/}
            </div>
          </header>
        </div>
      </div>
    </div>
  );
}
