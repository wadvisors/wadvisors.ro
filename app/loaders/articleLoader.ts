import { type LoaderFunctionArgs } from "react-router";
import transformContent from "~/utils/get-content";

async function pressLoader(args: LoaderFunctionArgs) {
  const language = args.context.bknd.language;
  const api = args.context.bknd.apiUI;

  const { data: articles } = await api.data.readMany("articles", {
    select: ["id", "title_t", "content_t", "tags"],
    where: { id: args.params.id, status: "PUBLISHED" },
    with: {
      cover: {
        select: ["path"],
      },
      gallery: {
        select: ["path"],
      },
    },
  });

  return transformContent(
    {
      id: args.params.id,
      articles,
    },
    language,
  );
}

export default pressLoader;
