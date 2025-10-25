import { type LoaderFunctionArgs } from "react-router";
import transformContent from "~/utils/get-content";

async function pressLoader(args: LoaderFunctionArgs) {
  const language = args.context.bknd.language;
  const api = args.context.bknd.apiUI;

  const { data: articles } = await api.data.readMany("articles", {
    select: ["id", "handle", "title_t", "content_t", "tags", "publish_at"],
    where: {
      handle: args.params.id,
      status: "PUBLISHED",
      publish_at: { $lte: new Date() },
    },
    with: {
      cover: {
        select: ["path"],
      },
      gallery: {
        select: ["path"],
      },
      team: {
        select: ["name", "position"],
        with: {
          avatar: {
            select: ["path"],
          },
        },
      },
    },
  });

  if (!articles.length) return null;

  return transformContent(articles[0], language);
}

export default pressLoader;
