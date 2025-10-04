import type { Route } from "./+types/_";
import { Outlet, type LoaderFunction, useRouteLoaderData } from "react-router";
import BaseLayout from "~/components/Layout";
import pageLoader from "~/loaders/pageLoader";

import "../app.css";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap",
  },
];

export const loader: LoaderFunction = pageLoader;

export function meta({}: Route.MetaArgs) {
  const { page } = useRouteLoaderData("routes/_");

  return [
    { title: `W Advisors - ${page?.title ?? ""}` },
    { name: "description", content: page?.description ?? "" },
  ];
}

export default function Layout() {
  return (
    <BaseLayout>
      <Outlet />
    </BaseLayout>
  );
}
