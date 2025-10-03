import { useEffect } from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $convertToMarkdownString, TRANSFORMERS } from "@lexical/markdown";
export default function TransformToMdAndSyncPlugin({
  onChange,
}: {
  onChange: any;
}) {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    return editor.registerUpdateListener(() => {
      editor.update(() => {
        const markdownData = $convertToMarkdownString(TRANSFORMERS);
        onChange(markdownData);
      });
    });
  }, [editor]);

  return null;
}
