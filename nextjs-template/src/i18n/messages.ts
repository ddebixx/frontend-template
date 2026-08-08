import en from "../messages/en.json";
import pl from "../messages/pl.json";
import type { Locale } from "./config";

export const messagesByLocale = {
  en,
  pl,
} as const satisfies Record<Locale, typeof en>;
