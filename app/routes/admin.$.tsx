import { lazy, Suspense, useSyncExternalStore } from "react";
import { useRouteLoaderData } from "react-router";
import EditorWrapper from "~/components/Editor/EditorWrapper";
import { TbMailFast } from "react-icons/tb";

const Admin = lazy(() => import("~/components/Admin.client"));

/*
  Customize Admin UI
  https://github.com/bknd-io/bknd/pull/265
*/

const config = {
  basepath: "/admin",
  logo_return_path: "/../",
  appShell: {
    userMenu: [
      {
        label: "Newsletter",
        icon: TbMailFast,
        disabled: false,
        onClick: () => (window.location.href = "/admin/data/newsletter"),
      },
    ],
  },
  entities: {
    pages: {
      fields: {
        content_t: {
          render: (context: any, entity: any, field: any, ctx: any) => {
            if (!ctx.value) return;
            return <EditorWrapper field={field} ctx={ctx} />;
          },
        },
      },
    },
    articles: {
      fields: {
        content_t: {
          render: (context: any, entity: any, field: any, ctx: any) => {
            if (!ctx.value) return;
            return <EditorWrapper field={field} ctx={ctx} />;
          },
        },
      },
    },
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
