import { em, index } from "bknd";

import pages from "./pages";
import articles from "./articles";
import clients from "./clients";
import showcases from "./showcases";
import press from "./press";
import media from "./media";
import users from "./users";
import team from "./team";

export default em(
  {
    ...pages,
    // ...articles,
    // ...press,
    ...showcases,
    ...clients,
    ...team,
    ...users,
    ...media,
  },
  ({ relation, index }, { pages, showcases, clients, team, users, media }) => {
    // -- relations
    relation(pages).polyToOne(media, {
      mappedBy: "cover",
    });
    relation(pages).polyToMany(media, {
      mappedBy: "gallery",
    });
    // relation(articles).manyToMany(users).polyToOne(media, {
    //   mappedBy: "cover",
    // });
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
    // relation(press).polyToOne(media, {
    //   mappedBy: "cover",
    // });
    // relation(press).polyToOne(media, {
    //   mappedBy: "document",
    // });

    // -- indexes
    index(pages).on(["active"]);
    index(pages).on(["handle"], true);
    index(pages).on(["order"]);
    index(team).on(["active"]);
    index(team).on(["order"]);
    // index(press).on(["active"]);
    // index(press).on(["publish_at"]);
    index(clients).on(["active"]);
    index(clients).on(["order"]);
    index(clients).on(["handle"], true);
    // index(articles).on(["status"]);
    // index(articles).on(["publish_at"]);
  },
).toJSON();
