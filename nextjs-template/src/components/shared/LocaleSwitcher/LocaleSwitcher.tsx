"use client";

import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

import { isLocale, type Locale, locales } from "@/i18n/config";
import { setLocale } from "@/i18n/setLocale";
import { cn } from "@/lib/utils";

import type { LocaleSwitcherProps } from "./LocaleSwitcher.types";

export const LocaleSwitcher = ({ className }: LocaleSwitcherProps) => {
  const locale = useLocale();
  const router = useRouter();
  const t = useTranslations("Common");

  function handleLocaleChange(nextLocale: string) {
    if (!isLocale(nextLocale)) {
      return;
    }

    void applyLocaleChange(nextLocale);
  }

  async function applyLocaleChange(nextLocale: Locale) {
    await setLocale(nextLocale);
    router.refresh();
  }

  return (
    <label className={cn("inline-flex items-center gap-2 text-sm", className)}>
      <span className="text-[var(--sage-deep)]">{t("locale")}</span>
      <select
        className="rounded-md border border-[var(--sage)]/30 bg-transparent px-2 py-1 text-[var(--ink)]"
        value={locale}
        onChange={(event) => handleLocaleChange(event.target.value)}
      >
        {locales.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </label>
  );
};
