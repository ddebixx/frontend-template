import { describe, expect, it } from "vitest";
import { getDisplayName } from "./getDisplayName";

describe("getDisplayName", () => {
  // Given
  describe("when the name has surrounding spaces", () => {
    // When
    it("returns a trimmed display name", () => {
      // Then
      expect(getDisplayName("  Ada Lovelace  ")).toBe("Ada Lovelace");
    });
  });
});
