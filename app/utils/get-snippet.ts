export default function getSnippet(snippets: any, handle: string) {
  try {
    const { content } = snippets.find((el: any) => el.handle === handle);
    return content || `missing-snippet-${handle}`;
  } catch (e) {
    return `missing-snippet-${handle}`;
  }
}
