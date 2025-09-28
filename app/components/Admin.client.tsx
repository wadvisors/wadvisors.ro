import { Admin, type BkndAdminProps } from "bknd/ui";
import "bknd/dist/styles.css";
import { Route } from "wouter";

/*
  Customize Admin UI
  https://github.com/bknd-io/bknd/pull/265
*/

import { useState } from "react";
import { type SerializedEditorState } from "lexical";

import { Editor } from "~/components/blocks/editor-x/editor";

export default function AdminClient(props: BkndAdminProps = {}) {
  return (
    <Admin {...props}>
      <Route path="/data/newsletter">
        <div>Manage newsletters</div>
        <Editor />
      </Route>
    </Admin>
  );
}
