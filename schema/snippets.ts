import { entity, text, jsonSchema } from "bknd";

export default {
  snippets: entity("snippets", {
    handle: text().required(),
    content_t: jsonSchema({
      label: "Content",
      hidden: ["table"],
      schema: {
        type: "object",
        properties: {
          en: { type: "string", title: "Content (EN)" },
          ro: { type: "string", title: "Content (RO)" },
        },
        required: ["en"],
        additionalProperties: false,
      },
      ui_schema: {
        en: {
          "ui:widget": "textarea",
          "ui:placeholder": "EN",
          "ui:options": { rows: 3 },
        },
        ro: {
          "ui:placeholder": "RO",
          "ui:widget": "textarea",
          "ui:options": { rows: 3 },
        },
      },
    }),
  }),
};
