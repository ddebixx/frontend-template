import { expect, test } from "@playwright/test";

test("user can open the home page", async ({ page }) => {
  // Given
  await page.goto("/");

  // When
  const heading = page.getByRole("heading", {
    name: /Thanks for using this Next\.js template/i,
  });

  // Then
  await expect(heading).toBeVisible();
});
