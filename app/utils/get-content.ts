type Localized = {
  en: string;
  [lang: string]: string | null | undefined;
};

function getContentByLang(value: Localized, lang: string): string {
  return (value[lang] || value.en) ?? "";
}

export default function transformContent(obj: any, lang: string): any {
  if (Array.isArray(obj)) {
    return obj.map((item) => transformContent(item, lang));
  }

  if (obj !== null && typeof obj === "object") {
    const result: Record<string, any> = {};

    for (const key of Object.keys(obj)) {
      const value = obj[key];

      if (key.endsWith("_t") && value && typeof value === "object") {
        const baseKey = key.slice(0, -2); // remove "_t"
        result[baseKey] = getContentByLang(value as Localized, lang);
      } else if (Array.isArray(value) || (value && typeof value === "object")) {
        result[key] = transformContent(value, lang);
      } else {
        result[key] = value;
      }
    }

    return result;
  }

  return obj;
}
