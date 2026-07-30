import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Button } from "./Button";

describe("<Button />", () => {
  // Given
  describe("when clicked", () => {
    // When
    it("calls the handler", () => {
      // Then
      const handleClick = vi.fn();
      render(<Button label="Click me" onClick={handleClick} />);
      fireEvent.click(screen.getByRole("button", { name: "Click me" }));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });
});
