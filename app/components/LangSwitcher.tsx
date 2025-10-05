import { useRouteLoaderData, Link } from "react-router";
import { TbWorld as Globe } from "react-icons/tb";

export default function LangSwitcher() {
  const { language } = useRouteLoaderData("root");

  const switchToLanguage = language === "en" ? "ro" : "en";

  return (
    <Link
      viewTransition={true}
      to={!switchToLanguage ? "?" : `?lang=${switchToLanguage}`}
      className="flex text-base-400 my-auto uppercase font-mono"
    >
      <Globe className=" text-base-200 mr-1 h-lh" />
      {switchToLanguage}
    </Link>
  );
}
