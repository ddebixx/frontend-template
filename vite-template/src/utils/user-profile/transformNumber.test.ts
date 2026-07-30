import { describe, expect, it } from "vitest";
import { transformNumber } from "./transformNumber";

describe("transformNumber", () => {
  // Given
  describe("when given a number", () => {
    // When
    it("returns the doubled value", () => {
      // Then
      expect(transformNumber(21)).toBe(42);
    });
  });
});
