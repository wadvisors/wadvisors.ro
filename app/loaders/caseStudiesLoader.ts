import { type LoaderFunctionArgs } from "react-router";
import transformContent from "~/utils/get-content";

async function showCasesLoader(args: LoaderFunctionArgs) {
  const language = args.context.bknd.language;
  const api = args.context.bknd.apiUI;

  const { data: showcases } = await api.data.readMany("showcases", {
    select: ["id", "title_t"],
    where: { active: true },
    with: {
      cover: {
        select: ["path"],
      },
      clients: {
        select: ["id", "title", "handle"],
        with: {
          logo: {
            select: ["path"],
          },
        },
      },
    },
    limit: 400,
    sort: "order",
  });

  return transformContent(
    {
      showcases,
    },
    language,
  );
}

export default showCasesLoader;
