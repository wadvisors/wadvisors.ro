import { type LoaderFunctionArgs } from "react-router";
import transformContent from "~/utils/get-content";

async function clientsLoader(args: LoaderFunctionArgs) {
  const language = args.context.bknd.language;
  const api = args.context.bknd.apiUI;

  const { data: clients } = await api.data.readMany("clients", {
    select: ["id", "title"],
    where: { active: true },
    with: {
      logo: {
        select: ["path"],
      },
    },
    sort: "order",
  });

  return transformContent(
    {
      clients,
    },
    language,
  );
}

export default clientsLoader;
