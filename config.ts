import { DatabaseEvents, type ModuleBuildContext } from "bknd";
import { slugify } from "bknd/utils";
import type { CloudflareBkndConfig } from "bknd/adapter/cloudflare";
import schema from "./schema/index";

export default {
  d1: {
    session: true,
  },
  buildConfig: {
    // this instructs the build command to always perform a db sync.
    // if you have CI/CD in place, you'd want to perform the sync on the CI/CD server instead using `npx bknd sync`
    sync: true,
  },
  app: (env) => {
    return {
      // in production mode, we use the appconfig.json file as static config
      config: {
        data: schema,
        server: {
          mcp: {
            enabled: true,
          },
        },
        auth: {
          enabled: true,
          jwt: {
            issuer: "wadvisors",
            secret: env.SECRET,
          },
          guard: { enabled: false },
          roles: {
            EDITOR: {
              is_default: true,
              implicit_allow: false,
              permissions: [
                "system.access.api",
                "media.file.read",
                "media.file.upload",
                "data.entity.create",
                "data.entity.read",
              ],
            },
            ADMIN: {
              implicit_allow: true,
            },
          },
        },
        media: {
          enabled: true,
          adapter: {
            type: "r2",
            config: {
              binding: "BUCKET",
            },
          },
        },
      },
      options: {
        mode: "code",
        seed: async (ctx: ModuleBuildContext) => {
          await ctx.em
            .mutator("articles")
            .insertMany([
              { title: "First post", title_t: { en: "title", ro: "Titlu" } },
            ]);
        },
      },
      onBuilt: async (app) => {
        app.emgr.onEvent(
          DatabaseEvents.MutatorInsertBefore,
          async ({ params: { entity, data } }) => {
            if (entity.name !== "pages") return { ...data };

            return {
              ...data,
              ...(data.title_t?.en && {
                title: data.title_t.en,
                handle: slugify(data.title_t.en),
              }),
            };
          },
          "sync",
        );
        app.emgr.onEvent(
          DatabaseEvents.MutatorUpdateBefore,
          async ({ params: { entity, data } }) => {
            if (entity.name !== "pages") return { ...data };

            return {
              ...data,
              ...(data.title_t?.en && {
                title: data.title_t.en,
                handle: slugify(data.title_t.en),
              }),
            };
          },
          "sync",
        );
      },
    };
  },
} satisfies CloudflareBkndConfig;
