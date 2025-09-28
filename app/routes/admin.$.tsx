import { LetterText } from "lucide-react";
import { lazy, Suspense, useSyncExternalStore } from "react";
import { useRouteLoaderData } from "react-router";

const Admin = lazy(() => import("~/components/Admin.client"));

const config = {
  basepath: "/admin",
  logo_return_path: "/../",
  appShell: {
    userMenu: [
      {
        label: "Newsletter",
        icon: LetterText,
        disabled: true,
        onClick: () => (window.location.href = "/admin/data/newsletter"),
      },
    ],
  },
};

export default function AdminPage() {
  const { user } = useRouteLoaderData("root");
  // derived from https://github.com/sergiodxa/remix-utils
  const hydrated = useSyncExternalStore(
    // @ts-ignore
    () => {},
    () => true,
    () => false,
  );
  if (!hydrated) return null;

  return (
    <Suspense>
      <Admin withProvider={{ user: user ?? undefined }} config={config} />
    </Suspense>
  );
}
