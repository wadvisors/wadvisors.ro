import { useRouteLoaderData, Link } from "react-router";
import { TbWorld as Globe } from "react-icons/tb";

export default function LangSwitcher() {
  const { language } = useRouteLoaderData("root");

  const switchToLanguage = language === "en" ? "ro" : "en";

  return (
    <Link
      viewTransition={true}
      to={!switchToLanguage ? "?" : `?lang=${switchToLanguage}`}
      className="nav__link--base flex items-center uppercase"
    >
      <Globe className=" text-primary-500 mr-1 h-lh" />
      {switchToLanguage}
    </Link>
  );
}
