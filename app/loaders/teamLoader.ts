import { type LoaderFunctionArgs } from "react-router";
import transformContent from "~/utils/get-content";

async function teamLoader(args: LoaderFunctionArgs) {
  const language = args.context.bknd.language;
  const api = args.context.bknd.apiUI;

  const { data: team } = await api.data.readMany("team", {
    select: ["id", "name", "position", "bio_t"],
    where: { active: true },
    with: {
      avatar: {
        select: ["path"],
      },
    },
    sort: "order",
  });

  return transformContent(team, language);
}

export default teamLoader;
