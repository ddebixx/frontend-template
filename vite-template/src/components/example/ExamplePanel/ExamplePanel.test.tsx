import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ExamplePanel } from "./ExamplePanel";

describe("<ExamplePanel />", () => {
  describe("when given a title", () => {
    it("renders the title", () => {
      render(<ExamplePanel title="Example" />);
      expect(screen.getByRole("heading", { name: "Example" })).toBeTruthy();
    });
  });
});
