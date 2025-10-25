import { type LoaderFunctionArgs } from "react-router";
import transformContent from "~/utils/get-content";
import toBucharestDate from "~/utils/tz";

async function pressLoader(args: LoaderFunctionArgs) {
  const language = args.context.bknd.language;
  const api = args.context.bknd.apiUI;

  const dateLimit = toBucharestDate();
  console.log("toBucharestDate()", dateLimit);

  const { data: featuredArticles } = await api.data.readMany("articles", {
    select: ["id", "handle", "title_t", "tags", "publish_at"],
    where: { status: "PUBLISHED", publish_at: { $lte: dateLimit } },
    with: {
      cover: {
        select: ["path"],
      },
    },
    sort: "-publish_at",
    limit: 3,
  });

  return transformContent(
    {
      featuredArticles,
    },
    language,
  );
}

export default pressLoader;
