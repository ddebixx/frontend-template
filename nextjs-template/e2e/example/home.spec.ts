import { expect, test } from "@playwright/test";

test("user can open the home page", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", {
      name: /Thanks for using this Next\.js template/i,
    }),
  ).toBeVisible();
});
