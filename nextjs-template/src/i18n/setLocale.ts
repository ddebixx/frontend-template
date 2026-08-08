"use server";

import { cookies } from "next/headers";

import { isLocale } from "./config";

const LOCALE_COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 365;

export async function setLocale(locale: string) {
  if (!isLocale(locale)) {
    return;
  }

  const store = await cookies();
  store.set("locale", locale, {
    path: "/",
    maxAge: LOCALE_COOKIE_MAX_AGE_SECONDS,
  });
}
