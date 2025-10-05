import { DatabaseEvents, type ModuleBuildContext, resendEmail } from "bknd";
import { slugify } from "bknd/utils";
import type { CloudflareBkndConfig } from "bknd/adapter/cloudflare";
import { cloudflareImageOptimization } from "bknd/plugins";
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
          guard: { enabled: env.ENVIRONMENT !== "development" },
          // guard: { enabled: true },
          roles: {
            EDITOR: {
              is_default: true,
              implicit_allow: false,
              permissions: [
                "system.access.api",
                "media.file.read",
                // "media.file.upload",
                // "data.entity.create",
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
        plugins: [
          cloudflareImageOptimization({
            accessUrl: "/api/_plugin/image/optimize",
          }),
        ],
        drivers: {
          email: resendEmail({ apiKey: env.RESEND_TOKEN }),
        },
      },
      onBuilt: async (app) => {
        app.emgr.onEvent(
          DatabaseEvents.MutatorInsertBefore,
          async ({ params: { entity, data } }) => {
            switch (entity.name) {
              case "pages":
                return {
                  ...data,
                  ...(data.title_t?.en && {
                    title: data.title_t.en,
                    handle: slugify(data.title_t.en),
                  }),
                };
              case "clients":
                return {
                  ...data,
                  ...(data.title && {
                    handle: slugify(data.title),
                  }),
                };
              case "articles":
              case "showcases":
              case "press":
                return {
                  ...data,
                  ...(data.title_t?.en && {
                    title: data.title_t.en,
                  }),
                };
              case "subscribers":
                return {
                  ...data,
                  subscribed_at: new Date(),
                  status: "INACTIVE",
                };
              default:
                return data;
            }
          },
          "sync",
        );
        app.emgr.onEvent(
          DatabaseEvents.MutatorUpdateBefore,
          async ({ params: { entity, data } }) => {
            switch (entity.name) {
              case "pages":
                return {
                  ...data,
                  ...(data.title_t?.en && {
                    title: data.title_t.en,
                    handle: slugify(data.title_t.en),
                  }),
                };
              case "clients":
                return {
                  ...data,
                  ...(data.title && {
                    handle: slugify(data.title),
                  }),
                };
              case "articles":
              case "showcases":
              case "press":
                return {
                  ...data,
                  ...(data.title_t?.en && {
                    title: data.title_t.en,
                  }),
                };
              case "subscribers":
                console.log("subscribers =>", data);

                // const res = await env.SEND_EMAIL.send();

                // console.log("---->", res);

                // const res = await app.drivers?.email?.send(
                //   "hello@wadvisors.ro",
                //   "email subject",
                //   {
                //     text: "test email",
                //     html: "<strong>test email html</strong>",
                //   },
                // );

                console.log("res", res);

                return {
                  ...data,
                };
              default:
                return data;
            }
          },
          "sync",
        );
      },
    };
  },
} satisfies CloudflareBkndConfig;
