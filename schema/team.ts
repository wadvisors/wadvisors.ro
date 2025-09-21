import { media, entity, text, jsonSchema, enumm, datetime } from "bknd";
import dateFields from "./date-fields";

export default {
  team: entity("team", {
    t: text({
      label: "Title",
      description: "Auto generated",
      hidden: ["submit"],
      html_config: {
        element: "input",
        props: {
          readonly: "true",
        },
      },
    }),
    tt: jsonSchema({
      label: "Title Variants",
      hidden: ["table"],
      schema: {
        type: "object",
        properties: {
          ro: { type: "string", title: "Title (RO)" },
          en: { type: "string", title: "Title (EN)" },
        },
        required: ["ro", "en"],
        additionalProperties: false,
      },
      ui_schema: {
        ro: {
          "ui:placeholder": "Scrie titlul în română",
          "ui:autofocus": true,
        },
        en: {
          "ui:placeholder": "Write the title in English",
        },
      },
    }),
    cover: media({
      label: "Cover",
      fillable: true,
      required: true,
      max_items: 1,
      mime_types: ["png", "jpg", "jpeg"],
    }),
    content: jsonSchema({
      label: "Content",
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
            title: "Content (RO)",
          },
        },
        required: ["en"],
        additionalProperties: false,
      },
      ui_schema: {
        ro: {
          "ui:widget": "textarea",
          "ui:options": { rows: 12 },
          "ui:enableMarkdownInDescription": true,
          "ui:description":
            "Write the Romanian content here (supports Markdown).",
        },
        en: {
          "ui:widget": "textarea",
          "ui:options": { rows: 12 },
          "ui:enableMarkdownInDescription": true,
          "ui:description":
            "Write the English content here (supports Markdown).",
        },
      },
    }),
    status: enumm({
      label: "Status",
      enum: ["draft", "review", "published", "archived"],
      default_value: "draft",
    }),
    published_at: datetime({
      label: "Publish date",
    }),
    ...dateFields,
  }),
};
