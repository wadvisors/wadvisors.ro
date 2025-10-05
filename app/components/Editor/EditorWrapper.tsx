import { useState, useEffect } from "react";
import getFieldOrGroupOfFields from "~/utils/get-field-config";
import Editor from "./Editor";

export default function EditorWrapper({
  field,
  ctx,
}: {
  field: any;
  ctx: any;
}) {
  const [data, setData] = useState(ctx.value);
  const fields = getFieldOrGroupOfFields(field.name, field, data);

  const patchState = (patch: any) => {
    setData((prev: any) => ({ ...prev, ...patch }));
  };

  useEffect(() => {
    ctx.handleChange(data);
  }, [data]);

  return (
    <>
      <div className="flex flex-row gap-1 items-center self-start">
        {field.config?.label}
      </div>
      {fields.map((f) => {
        return (
          <Editor
            key={f.key}
            name={f.key}
            value={f.initial}
            label={f.label}
            handleChange={patchState}
          />
        );
      })}
    </>
  );
}
