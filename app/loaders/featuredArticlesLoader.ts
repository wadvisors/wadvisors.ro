import { type LoaderFunctionArgs } from "react-router";
import transformContent from "~/utils/get-content";

async function pressLoader(args: LoaderFunctionArgs) {
  const language = args.context.bknd.language;
  const api = args.context.bknd.apiUI;

  const { data: featuredArticles } = await api.data.readMany("articles", {
    select: ["id", "location", "title_t", "content_t"],
    where: { active: true },
    with: {
      cover: {
        select: ["path"],
      },
      document: {
        select: ["path"],
      },
    },
    sort: "publishAt",
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
