import type { Route } from "./+types/_._index";
import { useRouteLoaderData } from "react-router";
import Hero from "~/components/Hero";

export default function Index() {
  const { page } = useRouteLoaderData("routes/_");

  return (
    <>
      <Hero />
      {/*{articles?.map((a) => {
        if (!a.cover) return <span>-</span>;

        return (
          <article>
            {a.title}
            <img
              className="aspect-video"
              loading="lazy"
              src={`api/_plugin/image/optimize/${a.cover.path}?width=1080&height=960&fit=cover`}
            />

            <pre>{JSON.stringify(a, null, 2)}</pre>
          </article>
        );
      })}*/}
    </>
  );
}
