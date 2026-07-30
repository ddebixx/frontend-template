import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { UserProfileCard } from "./UserProfileCard";

describe("<UserProfileCard />", () => {
  // Given
  describe("when profile props are provided", () => {
    // When
    it("renders the display name and email", () => {
      // Then
      render(
        <UserProfileCard
          fullName="Ada Lovelace"
          email="ada@example.com"
          roleLabel="Admin"
        />,
      );
      expect(screen.getByText("Ada Lovelace")).toBeTruthy();
      expect(screen.getByText("ada@example.com")).toBeTruthy();
      expect(screen.getByText("Admin")).toBeTruthy();
    });
  });
});
