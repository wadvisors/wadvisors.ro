import { entity, text, datetime, enumm } from "bknd";

export default {
  subscribers: entity("subscribers", {
    first_name: text({ hidden: ["read"] }).required(),
    last_name: text({ hidden: ["read"] }).required(),
    email: text({
      pattern: "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
      hidden: ["form"],
    }).required(),
    status: enumm({
      enum: ["INACTIVE", "SUBSCRIBED", "UNSUBSCRIBED"],
      default_value: "INACTIVE",
      hidden: ["form"],
    }).required(),
    resend_id: text({
      pattern:
        "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$",
      hidden: ["form"],
    }),
    resend_audience_id: text({
      pattern:
        "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$",
      hidden: ["form"],
    }),
    subscribed_at: datetime({
      default_value: new Date(),
      hidden: ["form"],
    }).required(),
    unsubscribed_at: datetime({ default_value: null, hidden: ["form"] }),
    confirmed_at: datetime({ default_value: null, hidden: ["form"] }),
  }),
};
