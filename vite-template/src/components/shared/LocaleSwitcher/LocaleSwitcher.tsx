import { useTranslation } from "react-i18next";

import { isLocale, locales } from "@/i18n/config";
import { changeLocale } from "@/i18n/setup";
import { cn } from "@/lib/utils";

import type { LocaleSwitcherProps } from "./LocaleSwitcher.types";

export const LocaleSwitcher = ({ className }: LocaleSwitcherProps) => {
  const { t, i18n } = useTranslation();

  function handleLocaleChange(nextLocale: string) {
    if (!isLocale(nextLocale)) {
      return;
    }

    changeLocale(nextLocale);
  }

  return (
    <label className={cn("inline-flex items-center gap-2 text-sm", className)}>
      <span className="text-[var(--sage-deep)]">{t("Common.locale")}</span>
      <select
        className="rounded-md border border-[var(--sage)]/30 bg-transparent px-2 py-1 text-[var(--ink)]"
        value={i18n.language}
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
