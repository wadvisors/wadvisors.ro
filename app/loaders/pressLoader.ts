import { type LoaderFunctionArgs } from "react-router";
import transformContent from "~/utils/get-content";

async function pressLoader(args: LoaderFunctionArgs) {
  const language = args.context.bknd.language;
  const api = args.context.bknd.apiUI;

  const { data: press } = await api.data.readMany("press", {
    select: ["id", "location", "title_t", "content_t", "publish_at"],
    where: { active: true },
    with: {
      cover: {
        select: ["path"],
      },
      document: {
        select: ["path"],
      },
    },
    limit: 400,
    sort: "-publish_at",
  });

  return transformContent(
    {
      press,
    },
    language,
  );
}

export default pressLoader;
