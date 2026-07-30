"use client";

import { twMerge } from "tailwind-merge";
import type { ButtonProps } from "./Button.types";

export const Button = ({ label, onClick, className }: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={twMerge(
        "rounded-md bg-[var(--sage)] px-4 py-2.5 text-sm font-semibold text-white transition duration-200 hover:bg-[var(--sage-deep)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--sage)]",
        className,
      )}
    >
      {label}
    </button>
  );
};
