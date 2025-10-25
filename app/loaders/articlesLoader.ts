import { type LoaderFunctionArgs } from "react-router";
import transformContent from "~/utils/get-content";
import toBucharestDate from "~/utils/tz";

async function articlesLoader(args: LoaderFunctionArgs) {
  const language = args.context.bknd.language;
  const api = args.context.bknd.apiUI;

  const { data: articles } = await api.data.readMany("articles", {
    select: ["id", "handle", "title_t", "tags", "publish_at"],
    where: { status: "PUBLISHED", publish_at: { $lte: toBucharestDate() } },
    with: {
      cover: {
        select: ["path"],
      },
    },
    sort: "-publish_at",
    limit: 100,
  });

  if (!articles.length) return null;

  return transformContent(articles, language);
}

export default articlesLoader;
