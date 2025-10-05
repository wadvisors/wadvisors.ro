import type { Route } from "./+types/_.blog.$id";
import { type LoaderFunction } from "react-router";
import articleLoader from "~/loaders/articleLoader";

export function meta({ loaderData }: Route.MetaArgs) {
  console.log("loaderData", loaderData);

  return [
    { title: `W Advisors - ${loaderData?.id}` },
    { name: "description", content: "Page description" },
  ];
}

export const loader: LoaderFunction = articleLoader;

export default function Article({ loaderData }: Route.ComponentProps) {
  return <main>case studies article {loaderData.id}</main>;
}
