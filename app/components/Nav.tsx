import { NavLink, useRouteLoaderData, useLoaderData } from "react-router";

import SiteLogo from "./SiteLogo";
import Button from "./Button";
import LangSwitcher from "./LangSwitcher";

export default function Nav() {
  const { language, user } = useRouteLoaderData("root");
  const { pages } = useRouteLoaderData("routes/_");

  return (
    <div className="sticky top-0 left-0 z-30 flex w-full flex-col transition-[padding,background-color] backdrop-blur-md duration-300 h-24 justify-center">
      <div className="mx-auto flex w-full text-base-900">
        <div className="site-container flex w-full items-center">
          <header className="flex w-full items-center gap-2">
            {/*<!-- desktop nav menu -->*/}
            <div className="grid grid-cols-3 w-full items-center lg:gap-4">
              <nav className="hidden md:block w-full">
                <ul className="flex h-full items-center justify-center px-4 text-lg lg:gap-4">
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
                  className="w-auto h-20"
                  alt="W Advisors"
                />
              </a>

              <div className="flex ml-auto">
                <LangSwitcher />
                <Button
                  variant="secondary"
                  href="/contact"
                  data-scrolled="false"
                >
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
