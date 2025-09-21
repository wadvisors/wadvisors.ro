import { entity, text, jsonSchema, enumm } from "bknd";

import dateFields from "./date-fields";

export default {
  portfolio: entity("portfolio", {
    title: jsonSchema({
      label: "Project Title",
      schema: {
        type: "object",
        properties: {
          ro: { type: "string", title: "Title (RO)" },
          en: { type: "string", title: "Title (EN)" },
        },
        required: ["ro", "en"],
        additionalProperties: false,
      },
    }),
    description: jsonSchema({
      label: "Project Description",
      schema: {
        type: "object",
        properties: {
          ro: { type: "string", title: "Description (RO)" },
          en: { type: "string", title: "Description (EN)" },
        },
        required: ["ro"],
        additionalProperties: false,
      },
      ui_schema: {
        ro: { "ui:widget": "textarea", "ui:options": { rows: 8 } },
        en: { "ui:widget": "textarea", "ui:options": { rows: 8 } },
      },
    }),
    link: text({ label: "Project Link" }),
    status: enumm({
      label: "Visibility",
      enum: ["draft", "published", "archived"],
      default_value: "draft",
    }),
    ...dateFields,
  }),
};
