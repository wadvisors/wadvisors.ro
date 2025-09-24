import { medium, entity, jsonSchema, boolean, text, datetime } from "bknd";

export default {
  press: entity("press", {
    title: text({
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
    title_t: jsonSchema({
      label: "Title",
      hidden: ["table"],
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
    location: text({}).required(),
    content: jsonSchema({
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
          "ui:options": { rows: 12 },
          "ui:description": "Write the press release in English",
        },
        ro: {
          "ui:widget": "textarea",
          "ui:options": { rows: 12 },
          "ui:description": "Scrie comunicatul în română",
        },
      },
    }),
    cover: medium({
      min_items: 1,
      mime_types: ["png", "jpg", "jpeg"],
    }),
    document: medium({
      min_items: 1,
      mime_types: ["pdf"],
    }),
    publishedAt: datetime({
      label: "Published At",
    }).required(),
    active: boolean(),
  }),
};
