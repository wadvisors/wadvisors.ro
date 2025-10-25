import { datetimeStringUTC } from "bknd/utils";

const TZ = "Europe/Bucharest";

export default function toBucharestDate(utcDate?: string) {
  const date = utcDate ? new Date(utcDate) : new Date();
  const str = date.toLocaleString("en-US", { timeZone: TZ });

  return datetimeStringUTC(str);
}
