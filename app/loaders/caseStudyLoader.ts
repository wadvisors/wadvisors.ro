import { type LoaderFunctionArgs } from "react-router";
import transformContent from "~/utils/get-content";

async function caseStudyLoader(args: LoaderFunctionArgs) {
  const language = args.context.bknd.language;
  const api = args.context.bknd.apiUI;

  const { data: showcases } = await api.data.readMany("showcases", {
    select: ["id", "title_t", "description_t", "link"],
    where: { id: args.params.id, active: true },
    with: {
      cover: {
        select: ["path"],
      },
      gallery: {
        select: ["path", "metadata"],
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
  });

  if (!showcases.length) return null;

  return transformContent(
    {
      ...showcases[0],
    },
    language,
  );
}

export default caseStudyLoader;
