import { em } from "bknd";

import pages from "./pages";
import articles from "./articles";
import clients from "./clients";
import showcases from "./showcases";
import press from "./press";
import media from "./media";
import users from "./users";
import team from "./team";
// import subscribers from "./subscribers";
import snippets from "./snippets";

export default em(
  {
    ...pages,
    ...articles,
    ...press,
    ...showcases,
    ...clients,
    ...team,
    // ...subscribers,
    ...snippets,
    ...users,
    ...media,
  },
  (
    { relation, index },
    {
      pages,
      articles,
      press,
      showcases,
      clients,
      team,
      // subscribers,
      snippets,
      users,
      media,
    },
  ) => {
    // -- relations
    relation(pages).polyToOne(media, {
      mappedBy: "cover",
    });
    relation(pages).polyToMany(media, {
      mappedBy: "gallery",
    });
    relation(articles).manyToOne(team);
    relation(articles).polyToMany(media, {
      mappedBy: "gallery",
    });
    relation(articles).polyToOne(media, {
      mappedBy: "cover",
    });
    relation(users).polyToOne(media, {
      mappedBy: "avatar",
    });
    relation(showcases).manyToOne(clients);
    relation(clients).polyToOne(media, {
      mappedBy: "logo",
    });
    relation(clients).polyToMany(media, {
      mappedBy: "gallery",
    });
    relation(team).polyToOne(media, {
      mappedBy: "avatar",
    });
    relation(press).polyToOne(media, {
      mappedBy: "cover",
    });
    relation(press).polyToOne(media, {
      mappedBy: "document",
    });
    relation(showcases).polyToOne(media, {
      mappedBy: "cover",
    });
    relation(showcases).polyToMany(media, {
      mappedBy: "gallery",
    });

    // -- indexes
    index(pages).on(["active"]);
    index(pages).on(["handle"], true);
    index(pages).on(["order"]);
    index(team).on(["active"]);
    index(team).on(["order"]);
    index(press).on(["active"]);
    index(press).on(["publish_at"]);
    index(showcases).on(["active"]);
    index(showcases).on(["order"]);
    index(clients).on(["active"]);
    index(clients).on(["order"]);
    index(clients).on(["handle"], true);
    index(articles).on(["handle"], true);
    index(articles).on(["status"]);
    index(articles).on(["publish_at"]);
    // index(subscribers).on(["email"], true);
    // index(subscribers).on(["status"]);
    // index(subscribers).on(["resend_id"], true);
    index(snippets).on(["handle"], true);
  },
).toJSON();
