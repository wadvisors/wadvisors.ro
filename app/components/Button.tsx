import { Link } from "react-router";
import { ArrowRight as Arrow } from "lucide-react";

interface Props {
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline" | "ghost";
  href?: string; // the href to go to, ex "/posts/"
  target?: string; // the target for the link, ex "_blank"
  rel?: string; // the rel for the link, ex "noopener"
  arrow?: "left" | "right" | "none";
  onclick?: any; // any onclick events
  className?: string; // any additional classes
  rest?: any; // catch-all for any additional parameters, such as "aria-label"
  children: React.ReactNode;
}

function ButtonContent({ arrow, children }: Pick<Props, "arrow" | "children">) {
  return (
    <>
      {arrow === "left" && (
        <Arrow
          className="h-[1.4em] w-[1.4em] rotate-180 transition-[transform]"
          aria-hidden="true"
        />
      )}
      <span>{children}</span>
      {arrow === "right" && (
        <Arrow
          className="h-[1.4em] w-[1.4em] transition-[transform]"
          aria-hidden="true"
        />
      )}
    </>
  );
}

export default function Button({ ...props }: Props) {
  const {
    type,
    variant = "primary",
    href = "",
    arrow = "none",
    onclick,
    className,
    children,
    ...rest
  } = props;

  const variantClass = {
    primary: "button--primary",
    secondary: "button--secondary",
    outline: "button--outline",
    ghost: "button--ghost",
  }[variant];

  if (href) {
    return (
      <Link
        className={`${className} button group gap-2 ${variantClass}`}
        to={href}
        {...rest}
      >
        <ButtonContent arrow={arrow}>{children}</ButtonContent>
      </Link>
    );
  }

  if (!href) {
    return (
      <button
        type={type}
        onClick={onclick}
        className={`${className} button group gap-2 ${variantClass}`}
        {...rest}
      >
        <ButtonContent arrow={arrow}>{children}</ButtonContent>
      </button>
    );
  }
}
