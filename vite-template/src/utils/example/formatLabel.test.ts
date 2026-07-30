import { describe, expect, it } from "vitest";
import { formatLabel } from "./formatLabel";

describe("formatLabel", () => {
  describe("when given padded text", () => {
    it("returns a trimmed lowercase label", () => {
      expect(formatLabel("  Example  ")).toBe("example");
    });
  });
});
