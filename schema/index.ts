import { em, index } from "bknd";

import pages from "./pages";
import articles from "./articles";
import clients from "./clients";
import portfolio from "./portfolio";
import press from "./press";
import media from "./media";
import users from "./users";
import team from "./team";

export default em(
  {
    ...pages,
    ...articles,
    ...press,
    ...portfolio,
    ...clients,
    ...team,
    ...users,
    ...media,
  },
  (
    { relation, index },
    { pages, articles, press, portfolio, clients, team, users, media },
  ) => {
    // -- relations
    relation(pages).polyToOne(media, {
      mappedBy: "cover",
    });
    relation(pages).polyToMany(media, {
      mappedBy: "gallery",
    });
    relation(articles).manyToMany(users).polyToOne(media, {
      mappedBy: "cover",
    });
    relation(users).polyToOne(media, {
      mappedBy: "avatar",
    });
    relation(portfolio).manyToOne(clients);
    relation(clients).polyToOne(media, {
      mappedBy: "logo",
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

    // -- indexes
    index(pages).on(["active"]);
    index(pages).on(["handle"]);
    index(pages).on(["order"]);
  },
).toJSON();
