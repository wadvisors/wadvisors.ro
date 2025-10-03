export default function getFieldOrGroupOfFields(
  root: string,
  field: any,
  data: any,
) {
  const { type, config } = field;

  // -- handle jsonSchema()
  if (type === "jsonschema") {
    const { schema, required } = config;

    return Object.entries(schema.properties).map(
      ([key, value]: [string, any]) => ({
        root,
        key,
        label: value.title,
        initial: data[key] ?? "",
        required: schema.required.includes(key),
      }),
    );
  } else if (type == "text") {
    // -- handle text()
    const { label, required, html_config } = config;
    return [
      {
        root,
        key: root,
        label,
        initial: data ?? "",
        required,
        html_config,
      },
    ];
  }

  throw new Error("Unhandled field");
}
