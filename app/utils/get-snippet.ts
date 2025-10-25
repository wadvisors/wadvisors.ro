export default function getSnippet(
  snippets: any,
  handle: string,
  noMissing = false,
) {
  try {
    const { content } = snippets.find((el: any) => el.handle === handle);
    return content || `missing-snippet-${handle}`;
  } catch (e) {
    return noMissing ? null : `missing-snippet-${handle}`;
  }
}
