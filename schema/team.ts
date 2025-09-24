import {
  medium,
  boolean,
  entity,
  text,
  jsonSchema,
  enumm,
  datetime,
} from "bknd";

export default {
  team: entity("team", {
    name: text().required(),
    avatar: medium({
      min_items: 1,
      mime_types: ["png", "jpg", "jpeg"],
    }),
    bio: jsonSchema({
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
        en: {
          "ui:widget": "textarea",
          "ui:options": { rows: 10 },
          "ui:enableMarkdownInDescription": true,
          "ui:description":
            "Write the English content here (supports Markdown).",
        },
        ro: {
          "ui:widget": "textarea",
          "ui:options": { rows: 10 },
          "ui:enableMarkdownInDescription": true,
          "ui:description":
            "Write the Romanian content here (supports Markdown).",
        },
      },
    }),
    active: boolean(),
  }),
};
