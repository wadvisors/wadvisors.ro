export default function splitMarkdown(content: string): {
  first: string;
  rest: string;
} {
  const lines = content.trim().split("\n");

  // Find the start of the second section (first heading after the first one)
  let splitIndex = lines.length;
  for (let i = 1; i < lines.length; i++) {
    if (/^#+\s/.test(lines[i])) {
      splitIndex = i;
      break;
    }
  }

  return {
    first: lines.slice(0, splitIndex).join("\n").trim(),
    rest: lines.slice(splitIndex).join("\n").trim(),
  };
}
