import { useRouteLoaderData } from "react-router";
import Markdown from "~/components/Markdown";
import Button from "./Button";

export default function Hero() {
  const { page } = useRouteLoaderData("routes/_");

  if (!page) return null;

  return (
    <section className="relative z-10 flex min-h-[100lvh] -mt-16 w-full">
      <div
        className={`absolute -z-10 h-full min-h-full w-full overflow-hidden bg-fill bg-no-repeat`}
        style={{
          backgroundImage: `url("/api/_plugin/image/optimize/${encodeURIComponent(
            page.cover.path,
          )}?width=1920&height=1080&fit=cover")`,
        }}
      >
        {/*<Image
			src={heroImage}
			className="hidden h-auto min-h-full w-full object-cover object-bottom sm:block"
			alt="wedding"
			aria-hidden="true"
			loading="eager"
			height={1400}
		/>
		<Image
			src={heroImageMobile}
			className="h-auto min-h-full w-full object-cover sm:hidden"
			alt="wedding"
			aria-hidden="true"
			loading="eager"
			width={1200}
		/>*/}
      </div>

      <div className="site-container relative flex w-full justify-items-end gap-10 pb-20 text-center md:text-left">
        <div className="text-base-50 mt-auto mr-auto max-w-[800px] flex-col">
          <Markdown
            content={page.content}
            overrides={{
              h1: {
                props: {
                  className:
                    "font-heading-1 text-4xl text-pretty md:text-7xl md:leading-tight",
                },
              },
              p: {
                props: {
                  className:
                    "mt-8 text-lg tracking-widest text-pretty md:max-w-[550px] md:text-2xl",
                },
              },
              a: {
                component: Button,
                props: {
                  variant: "ghost",
                  arrow: "right",
                  className:
                    "pl-0 text-xl text-white md:text-3xl mt-10 flex flex-wrap justify-center gap-4 md:justify-start",
                },
              },
            }}
          />
        </div>
      </div>
    </section>
  );
}
