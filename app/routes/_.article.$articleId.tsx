import type { Route } from "./+types/_.article.$articleId";

export function meta({ loaderData }: Route.MetaArgs) {
  return [
    { title: `W Advisors - ${loaderData?.articleId}` },
    { name: "description", content: "Page description" },
  ];
}

export async function loader({ params }: Route.LoaderArgs) {
  const articleId = params.articleId;

  return { articleId };
}

export default function Article({ loaderData }: Route.ComponentProps) {
  return <main>article page {loaderData.articleId}</main>;
}
