import { Admin, type BkndAdminProps } from "bknd/ui";
import "bknd/dist/styles.css";
import { Route } from "wouter";

/*
  Customize Admin UI
  https://github.com/bknd-io/bknd/pull/265
*/

export default function AdminClient(props: BkndAdminProps = {}) {
  return (
    <Admin {...props}>
      <Route path="/data/newsletter">
        <div>WIP: Manage newsletters</div>
      </Route>
    </Admin>
  );
}
