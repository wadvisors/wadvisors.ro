import type { Route } from "./+types/_";
import { Outlet, type LoaderFunction, useRouteLoaderData } from "react-router";
import BaseLayout from "~/components/Layout";
import pageLoader from "~/loaders/pageLoader";
import "../app.css";

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
