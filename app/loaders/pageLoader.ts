import { type LoaderFunctionArgs } from "react-router";
import transformContent from "~/utils/get-content";

async function pageLoader(args: LoaderFunctionArgs) {
  const language = args.context.bknd.language;
  const api = args.context.bknd.apiUI;
  const url = new URL(args.request.url);

  const pathname =
    url.pathname === "/" ? "home" : url.pathname.replace("/", "");

  // -- menu
  const { data: pages } = await api.data.readMany("pages", {
    select: ["id", "title_t", "handle"],
    where: { active: true },
    sort: "order",
  });

  // -- page
  const { data: page } = await api.data.readMany("pages", {
    select: ["id", "title_t", "content_t"],
    where: { handle: pathname, active: true },
    with: {
      cover: {
        select: ["path"],
      },
      gallery: {
        select: ["path"],
      },
    },
    limit: 1,
  });

  return transformContent(
    {
      page: page[0],
      pages,
    },
    language,
  );
}

export default pageLoader;
