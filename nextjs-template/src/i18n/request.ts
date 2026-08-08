import { cookies } from "next/headers";
import { getRequestConfig } from "next-intl/server";

import { defaultLocale, isLocale } from "./config";
import { messagesByLocale } from "./messages";

export default getRequestConfig(async () => {
  const store = await cookies();
  const candidate = store.get("locale")?.value;
  const locale = candidate && isLocale(candidate) ? candidate : defaultLocale;

  return {
    locale,
    messages: messagesByLocale[locale],
  };
});
