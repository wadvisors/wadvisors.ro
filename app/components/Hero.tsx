import { useRouteLoaderData } from "react-router";
import Markdown from "~/components/Markdown";
import Button from "./Button";

export default function Hero() {
  const { page } = useRouteLoaderData("routes/_");

  if (!page) return null;

  return (
    <section className="relative z-10 flex min-h-[100lvh] -mt-[136px] w-full">
      <div
        className={`absolute -z-10 h-full min-h-full w-full overflow-hidden bg-cover bg-center bg-no-repeat`}
        style={{
          backgroundImage: `url("/api/_plugin/image/optimize/${encodeURIComponent(
            page.cover.path,
          )}?width=1920&height=1080&fit=cover")`,
        }}
      ></div>
      <div className="flex w-full justify-items-end gap-10 pb-20 text-center md:text-left backdrop-blur md:mask-r-from-30% bg-gradient-to-r from-white/50 to-transparent">
        <div className="text-base-500 site-container mt-auto w-full flex-col">
          <Markdown
            content={page.content}
            overrides={{
              h1: {
                props: {
                  className:
                    "motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md font-heading-1 text-4xl text-pretty md:text-5xl md:leading-tight inline-block md:w-1/2",
                },
              },
              p: {
                props: {
                  className:
                    "motion-opacity-in-0 motion-blur-in-sm mt-8 text-lg tracking-widest text-pretty md:w-1/2 md:text-2xl",
                },
              },
              a: {
                component: Button,
                props: {
                  variant: "primary",
                  arrow: "right",
                  className:
                    "text-xl justify-center inline-flex gap-4 md:justify-start",
                },
              },
            }}
          />
        </div>
      </div>
    </section>
  );
}
