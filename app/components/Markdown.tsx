import Markdown from "markdown-to-jsx";
import { useState } from "react";
import { Link } from "react-router";

interface MarkdownRendererProps {
  content: string;
  className?: string;
  overrides?: object;
}

function Newsletter({}) {
  const [count, setCount] = useState(0);

  return (
    <div>
      Newsletter comp {count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
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
            component: Link,
            props: {
              target: "_blank",
              rel: "noopener noreferrer",
            },
          },
          newsletter: {
            component: Newsletter,
          },
          ...overrides,
        },
      }}
    >
      {content}
    </Markdown>
  );
}
