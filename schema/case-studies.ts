import { entity, text, jsonSchema, boolean } from "bknd";

export default {
  caseStudies: entity("case-studies", {
    title: jsonSchema({
      label: "Project Title",
      schema: {
        type: "object",
        properties: {
          en: { type: "string", title: "Title (EN)" },
          ro: { type: "string", title: "Title (RO)" },
        },
        required: ["en"],
        additionalProperties: false,
      },
    }),
    description: jsonSchema({
      label: "Project Description",
      schema: {
        type: "object",
        properties: {
          en: { type: "string", title: "Description (EN)" },
          ro: { type: "string", title: "Description (RO)" },
        },
        required: ["en"],
        additionalProperties: false,
      },
      ui_schema: {
        en: { "ui:widget": "textarea", "ui:options": { rows: 8 } },
        ro: { "ui:widget": "textarea", "ui:options": { rows: 8 } },
      },
    }),
    link: text({ label: "Project Link" }),
    active: boolean(),
  }),
};
