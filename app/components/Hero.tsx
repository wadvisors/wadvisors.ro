import { useRouteLoaderData } from "react-router";
import Button from "./Button";
import getSnippet from "~/utils/get-snippet";

interface HeroProps {
  cover: string;
}

export default function Hero({ cover }: HeroProps) {
  if (!cover) return null;

  const { snippets } = useRouteLoaderData("routes/_");

  return (
    <section className="relative z-10 flex min-h-[100lvh] -mt-[176px] w-full">
      <div
        className={`absolute -z-10 h-full min-h-full w-full overflow-hidden bg-cover bg-center bg-no-repeat`}
        style={{
          backgroundImage: `url("/api/_plugin/image/optimize/${encodeURIComponent(
            cover,
          )}?width=1920&height=1080&fit=cover")`,
        }}
      ></div>
      <div className="flex w-full justify-items-end gap-10 pb-20 text-center md:text-left backdrop-blur md:mask-r-from-30% bg-gradient-to-r from-white/50 to-transparent">
        <div className="site-container mt-auto w-full flex-col">
          <h1 className="motion-opacity-in-0 text-base-600 lowercase motion-translate-y-in-100 motion-blur-in-md font-mono text-4xl text-pretty md:text-5xl md:leading-tight inline-block md:w-1/2">
            {getSnippet(snippets, "splash-title")}
          </h1>
          <p className="motion-opacity-in-0 motion-blur-in-sm mt-8 text-lg tracking-widest text-pretty md:w-1/2 md:text-2xl">
            {getSnippet(snippets, "splash-description")}
          </p>
          <Button
            href="/contact"
            className="mt-4 text-xl justify-center inline-flex gap-4 md:justify-start -motion-translate-y-in-100"
            variant="primary"
            arrow="right"
          >
            {getSnippet(snippets, "splash-cta")}
          </Button>
        </div>
      </div>
    </section>
  );
}
