import { entity, text, jsonSchema, medium, media, boolean } from "bknd";

export default {
  showcases: entity("showcases", {
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
      label: "Project Title",
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
    description_t: jsonSchema({
      label: "Project Description",
      hidden: ["table"],
      schema: {
        type: "object",
        properties: {
          en: { type: "string", title: "Description (EN)" },
          ro: { type: "string", title: "Description (RO)" },
        },
        required: ["en"],
        additionalProperties: false,
      },
    }),
    link: text({
      label: "Project Link",
      pattern: "^https://[^\\s/$.?#].[^\\s]*$",
      hidden: ["table"],
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
    active: boolean(),
  }),
};
