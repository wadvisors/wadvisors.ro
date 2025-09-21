import { systemEntity, medium } from "bknd";

export default {
  users: systemEntity("users", {
    avatar: medium(),
  }),
};
