import { type LoaderFunctionArgs } from "react-router";
import transformContent from "~/utils/get-content";

async function pageLoader(args: LoaderFunctionArgs) {
  const language = args.context.bknd.language;
  const api = args.context.bknd.apiUI;

  const { data: press } = await api.data.readMany("press", {
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
    sort: "publishedAt",
  });

  return transformContent(
    {
      press,
    },
    language,
  );
}

export default pageLoader;
