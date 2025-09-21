import { media, entity, jsonSchema, enumm, datetime } from "bknd";
import dateFields from "./date-fields";

export default {
  press: entity("press", {
    title: jsonSchema({
      label: "Title",
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
    content: jsonSchema({
      label: "Content",
      schema: {
        type: "object",
        properties: {
          ro: { type: "string", title: "Content (RO)" },
          en: { type: "string", title: "Content (EN)" },
        },
        required: ["ro"],
        additionalProperties: false,
      },
      ui_schema: {
        ro: {
          "ui:widget": "textarea",
          "ui:options": { rows: 12 },
          "ui:description": "Scrie comunicatul în română",
        },
        en: {
          "ui:widget": "textarea",
          "ui:options": { rows: 12 },
          "ui:description": "Write the press release in English",
        },
      },
    }),
    media: media({
      label: "Attached Media",
    }),
    status: enumm({
      label: "Status",
      enum: ["draft", "review", "published", "archived"],
      default_value: "draft",
    }),
    publishedAt: datetime({
      label: "Published at",
    }),
    ...dateFields,
  }),
};
