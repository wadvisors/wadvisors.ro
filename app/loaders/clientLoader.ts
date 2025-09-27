import { type LoaderFunctionArgs } from "react-router";
import transformContent from "~/utils/get-content";

async function clientsLoader(args: LoaderFunctionArgs) {
  const language = args.context.bknd.language;
  const api = args.context.bknd.apiUI;

  const { data: clients } = await api.data.readMany("clients", {
    select: ["id", "title", "handle", "content_t", "tags"],
    where: { active: true, handle: args.params.handle },
    with: {
      logo: {
        select: ["path"],
      },
      gallery: {
        select: ["path"],
      },
    },
    sort: "order",
    limit: 1,
  });

  return transformContent(
    {
      client: clients[0],
    },
    language,
  );
}

export default clientsLoader;
