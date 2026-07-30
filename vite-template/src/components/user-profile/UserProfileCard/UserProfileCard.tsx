import { UserProfileBadge } from "./UserProfileBadge/UserProfileBadge";
import { USER_PROFILE_CARD_TITLE } from "./UserProfileCard.constants";
import type { UserProfileCardProps } from "./UserProfileCard.types";
import { getDisplayName } from "./utils/getDisplayName";

export const UserProfileCard = ({
  fullName,
  email,
  roleLabel,
}: UserProfileCardProps) => {
  const displayName = getDisplayName(fullName);

  return (
    <section
      aria-label={USER_PROFILE_CARD_TITLE}
      className="flex flex-col gap-3 border border-[var(--line)] bg-[var(--paper)] p-5 backdrop-blur-sm"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--sage)]">
        {USER_PROFILE_CARD_TITLE}
      </p>
      <h2 className="font-display text-2xl font-medium tracking-tight text-[var(--ink)]">
        {displayName}
      </h2>
      <p className="text-base text-[var(--sage-deep)]/80">{email}</p>
      <UserProfileBadge roleLabel={roleLabel} />
    </section>
  );
};
