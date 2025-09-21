import { datetime } from "bknd";

export default {
  created_at: datetime({
    label: "Created at",
    hidden: true,
  }),
  updated_at: datetime({
    label: "Updated at",
    hidden: true,
  }),
};
