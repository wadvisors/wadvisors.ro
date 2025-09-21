import { Link, type LinkProps } from "react-router";

export default function FooterLink({ ...props }: LinkProps) {
  return <Link className="nav__link--base" {...props} />;
}
