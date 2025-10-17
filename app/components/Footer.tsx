import { Link, NavLink, useRouteLoaderData } from "react-router";
import SiteLogo from "./SiteLogo";
import FooterLink from "./FooterLink";
import {
  TbBrandInstagram,
  TbBrandFacebook,
  TbBrandTwitter,
  TbBrandLinkedin,
  TbBrandYoutube,
} from "react-icons/tb";

export default function Footer() {
  const { env } = useRouteLoaderData("root");
  const { pages, language } = useRouteLoaderData("routes/_");

  return (
    <footer className="bg-base-100/40 justify-center py-4 md:py-8 w-full">
      <div className="site-container py-4 md:py-8 w-full flex-col md:flex-row flex justify-between gap-4">
        <div className="flex flex-col order-last md:order-first">
          <h4 className="h4 mb-2">Stay in touch.</h4>
          <span>
            &copy; 2012 - {new Date().getFullYear()} W Advisors. All Rights
            Reserved.
          </span>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="h4 mb-2">Questions?</h4>
          <NavLink
            viewTransition={true}
            to={{
              pathname: `/contact`,
              search: `lang=${language}`,
            }}
            className="[.active]:text-primary-700 [.active]:border-b [.active]:border-primary-700"
          >
            Contact us
          </NavLink>
          <div className="gap-4 flex">
            <a
              href="https://x.com/WAdvisors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TbBrandFacebook className="size-6 transition hover:opacity-80" />
              <span className="sr-only">Facebook</span>
            </a>
            <a
              href="https://x.com/WAdvisors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TbBrandTwitter className="size-6 transition hover:opacity-80" />
              <span className="sr-only">Twitter</span>
            </a>
            <a
              href="https://x.com/WAdvisors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TbBrandYoutube className="size-6 transition hover:opacity-80" />
              <span className="sr-only">Youtube</span>
            </a>
            <a
              href="https://x.com/WAdvisors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TbBrandInstagram className="size-6 transition hover:opacity-80" />
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>
        <div className="flex-col hidden md:flex">
          <ul className="grid md:grid-cols-2 gap-2 md:gap-x-8">
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
                    className=" [.active]:text-primary-700 [.active]:border-b [.active]:border-primary-700"
                  >
                    {title}
                  </NavLink>
                </li>
              ),
            )}
          </ul>
          <div className="mt-4 font-extralight text-xs opacity-50 font-mono flex gap-2 items-center justify-center">
            <em className="not-italic">
              Built on{" "}
              <a
                className="hover:underline"
                target="_blank"
                href="https://bknd.io"
              >
                bknd.io{" "}
                <span className="text-red-600 animation animate-pulse">♥</span>
              </a>
            </em>
            <span className="bg-white rounded p-1">
              {env.WORKERS_CI_BRANCH}
            </span>
            <span className="bg-white rounded p-1 slashed-zero proportional-nums">
              {env.WORKERS_CI_COMMIT_SHA.slice(0, 7)}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
