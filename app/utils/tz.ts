const TZ = "Europe/Bucharest";

export default function toBucharestDate(utcDate?: string) {
  const date = utcDate ? new Date(utcDate) : new Date();
  const str = date.toLocaleString("en-US", { timeZone: TZ });

  return new Date(str);
}
