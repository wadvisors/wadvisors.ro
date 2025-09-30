import { medium, media, entity, text, jsonSchema, enumm, datetime } from "bknd";

export default {
  articles: entity("articles", {
    title: text({
      label: "Title",
      description: "Auto generated",
      hidden: ["submit", "create", "form", "update"],
      html_config: {
        element: "input",
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
        ro: {
          "ui:placeholder": "EN",
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
      label: "Cover",
      min_items: 1,
      mime_types: ["image/png", "image/jpg", "image/jpeg"],
    }),
    gallery: media({
      max_items: 50,
      mime_types: ["image/png", "image/jpg", "image/jpeg"],
    }),
    tags: jsonSchema({
      hidden: ["table"],
      schema: {
        type: "array",
        items: {
          type: "string",
        },
        default: [],
      },
    }),
    status: enumm({
      label: "Status",
      enum: ["DRAFT", "PUBLISHED", "ARCHIVED"],
      default_value: "DRAFT",
    }),
    publish_at: datetime({
      label: "Publish date",
    }).required(),
  }),
};
