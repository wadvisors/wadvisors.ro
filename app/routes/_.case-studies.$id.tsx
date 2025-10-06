import type { Route } from "./+types/_.case-studies.$id";
import { type LoaderFunction, useLoaderData } from "react-router";
import Markdown from "~/components/Markdown";
import Gallery from "~/components/Gallery";

import caseStudyLoader from "~/loaders/caseStudyLoader";

export function meta({ loaderData }: Route.MetaArgs) {
  return [
    { title: `W Advisors - ${loaderData?.title}` },
    { name: "description", content: loaderData?.description },
  ];
}

export const loader: LoaderFunction = caseStudyLoader;

export default function Article() {
  const caseStudy = useLoaderData();
  if (!caseStudy) return null;

  const { title, description, gallery } = caseStudy;

  return (
    <div className="site-container md:pt-12 pt-8">
      <h1 className="h2 text-pretty text-center mb-12">{title}</h1>
      <Markdown className="markdown-content" content={description} />
      <Gallery className="mt-10" gallery={gallery} />
    </div>
  );
}
