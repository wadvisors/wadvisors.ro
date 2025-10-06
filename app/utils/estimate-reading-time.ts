export default function estimateReadingTime(text = "", wpm = 180) {
  const words = text.trim().split(/\s+/).length;
  const minutes = words / wpm;

  if (minutes < 1) {
    return "< 1 min read";
  }

  return `${Math.ceil(minutes)} min read`;
}
