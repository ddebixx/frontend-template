import { getTranslations } from "next-intl/server";

import { LocaleSwitcher } from "@/components/shared/LocaleSwitcher/LocaleSwitcher";

export default async function Home() {
  const t = await getTranslations("HomePage");

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center gap-3 px-6 py-16 sm:px-10">
      <div className="flex items-center justify-between gap-4">
        <p className="animate-rise text-sm font-semibold uppercase tracking-[0.18em] text-[var(--sage)]">
          {t("eyebrow")}
        </p>
        <LocaleSwitcher className="animate-rise" />
      </div>
      <h1 className="animate-rise-delayed font-display text-4xl font-medium tracking-tight text-[var(--ink)] sm:text-5xl">
        {t("title")}
      </h1>
      <p className="animate-rise-late text-lg text-[var(--sage-deep)]">
        {t("subtitle")}
      </p>
    </main>
  );
}
