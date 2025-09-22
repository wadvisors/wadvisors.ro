import { useRouteLoaderData, Link } from "react-router";
import { Globe } from "lucide-react";

export default function LangSwitcher() {
  const { language } = useRouteLoaderData("root");

  const switchToLanguage = language === "en" ? "ro" : "en";

  return (
    <Link
      viewTransition={true}
      to={!switchToLanguage ? "?" : `?lang=${switchToLanguage}`}
      className="nav__link--base flex items-center"
    >
      <Globe className="p-1" />
      {language}
    </Link>
  );
}
