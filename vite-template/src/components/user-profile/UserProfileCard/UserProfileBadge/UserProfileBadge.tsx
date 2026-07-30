interface UserProfileBadgeProps {
  roleLabel: string;
}

export const UserProfileBadge = ({ roleLabel }: UserProfileBadgeProps) => {
  return (
    <span className="inline-flex w-fit rounded-md border border-[var(--line)] bg-[var(--mist)] px-2.5 py-1 text-xs font-semibold tracking-wide text-[var(--sage-deep)]">
      {roleLabel}
    </span>
  );
};
