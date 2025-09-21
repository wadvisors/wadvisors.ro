import { Admin, type BkndAdminProps } from "bknd/ui";
// import { Editor } from "@tiptap/core";
// import StarterKit from "@tiptap/starter-kit";
import "bknd/dist/styles.css";

export default function AdminClient(props: BkndAdminProps = {}) {
  return <Admin {...props} />;
}
