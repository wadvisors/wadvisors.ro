import { medium, media, entity, text, jsonSchema, boolean, number } from "bknd";

export default {
  clients: entity("clients", {
    title: text().required(),
    handle: text({
      hidden: ["table", "update", "form", "create"],
      html_config: {
        props: {
          readonly: "true",
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
    logo: medium({
      label: "Logo",
      min_items: 1,
      mime_types: ["png", "jpg", "jpeg"],
    }),
    gallery: media({
      mime_types: ["png", "jpg", "jpeg"],
    }),
    active: boolean(),
    order: number(),
  }),
};
