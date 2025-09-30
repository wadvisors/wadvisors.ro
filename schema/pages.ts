import { media, medium, entity, text, jsonSchema, boolean, number } from "bknd";

export default {
  pages: entity("pages", {
    title: text({
      hidden: ["submit", "create", "form", "update"],
      html_config: {
        element: "input",
        props: {
          readonly: "true",
        },
      },
    }),
    handle: text({
      hidden: ["table", "update", "form", "create"],
      html_config: {
        props: {
          readonly: "true",
        },
      },
    }),
    title_t: jsonSchema({
      label: "Title Variants",
      hidden: ["table"],
      schema: {
        type: "object",
        properties: {
          en: { type: "string", title: "Title (EN)" },
          ro: { type: "string", title: "Titlu (RO)" },
        },
        required: ["en"],
        additionalProperties: false,
      },
      ui_schema: {
        en: {
          "ui:autofocus": true,
        },
      },
    }),
    content_t: jsonSchema({
      label: "Content Variants",
      hidden: ["table"],
      schema: {
        type: "object",
        properties: {
          en: {
            type: "string",
            title: "Content (EN)",
          },
          ro: {
            type: "string",
            title: "Continut (RO)",
          },
        },
        required: ["en"],
        additionalProperties: false,
      },
      ui_schema: {
        en: {
          "ui:widget": "textarea",
          "ui:options": { rows: 8 },
          "ui:enableMarkdownInDescription": true,
          "ui:description": "Content (EN)",
        },
        ro: {
          "ui:widget": "textarea",
          "ui:options": { rows: 8 },
          "ui:enableMarkdownInDescription": true,
          "ui:description": "Continut (RO)",
        },
      },
    }),
    cover: medium({
      min_items: 1,
      mime_types: ["image/png", "image/jpg", "image/jpeg"],
    }),
    gallery: media({
      mime_types: ["image/png", "image/jpg", "image/jpeg"],
    }),
    active: boolean(),
    order: number(),
  }),
};
