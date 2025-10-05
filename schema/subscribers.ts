import { entity, text, datetime, enumm } from "bknd";

export default {
  subscribers: entity("subscribers", {
    first_name: text().required(),
    last_name: text().required(),
    email: text({
      pattern: "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
    }).required(),
    status: enumm({
      enum: ["INACTIVE", "SUBSCRIBED", "UNSUBSCRIBED"],
      default_value: "INACTIVE",
    }).required(),
    resend_id: text({
      pattern:
        "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$",
    }),
    resend_audience_id: text({
      pattern:
        "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$",
    }),
    subscribed_at: datetime({
      default_value: new Date(),
    }).required(),
    unsubscribed_at: datetime({ default_value: null }),
    confirmed_at: datetime({ default_value: null }),
  }),
};
