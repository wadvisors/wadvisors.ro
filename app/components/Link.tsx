import { Link as LinkDefault, useRouteLoaderData } from "react-router";

export default function Link({ to = "", ...rest }) {
  const { language } = useRouteLoaderData("routes/_");

  return (
    <LinkDefault
      to={{ pathname: to, search: `?lang=${language}` }}
      {...rest}
      viewTransition={true}
    />
  );
}
