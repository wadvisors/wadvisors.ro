import Markdown from "markdown-to-jsx";
import Button from "./Button";
import Portfolio from "./Portfolio";
import Team from "./Team";
import Clients from "./Clients";

interface MarkdownRendererProps {
  content: string;
  className?: string;
  overrides?: object;
}

export default function MarkdownRenderer({
  content,
  className = "",
  overrides = {},
}: MarkdownRendererProps) {
  return (
    <Markdown
      className={className}
      options={{
        overrides: {
          a: {
            component: Button,
            props: {
              target: "_blank",
              rel: "noopener noreferrer",
              variant: "link",
            },
          },
          portfolio: {
            component: Portfolio,
          },
          team: {
            component: Team,
          },
          clients: {
            component: Clients,
          },
          ...overrides,
        },
      }}
    >
      {content}
    </Markdown>
  );
}
