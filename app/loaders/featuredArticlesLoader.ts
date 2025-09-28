import { type LoaderFunctionArgs } from "react-router";
import transformContent from "~/utils/get-content";

async function pressLoader(args: LoaderFunctionArgs) {
  const language = args.context.bknd.language;
  const api = args.context.bknd.apiUI;

  const { data: featuredArticles } = await api.data.readMany("articles", {
    select: ["id", "title_t", "tags", "publish_at"],
    where: { status: "PUBLISHED" },
    with: {
      cover: {
        select: ["path"],
      },
    },
    sort: "publish_at",
    limit: 4,
  });

  return transformContent(
    {
      featuredArticles,
    },
    language,
  );
}

export default pressLoader;
