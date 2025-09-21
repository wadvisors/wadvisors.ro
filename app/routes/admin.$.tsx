import { lazy, Suspense, useSyncExternalStore } from "react";
import { useRouteLoaderData } from "react-router";

const Admin = lazy(() => import("~/components/Admin.client"));

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
      <Admin
        withProvider={{ user: user ?? undefined }}
        config={{ basepath: "/admin", logo_return_path: "/../" }}
      />
    </Suspense>
  );
}
