# Testing convention

## BDD: Given / When / Then

Write tests as living documentation.

### Vitest

```ts
describe('<Button />', () => {
  // Given
  describe('when clicked', () => {
    // When
    it('calls the handler', () => {
      // Then
      const handleClick = vi.fn();
      render(<Button onClick={handleClick}>Click me</Button>);
      fireEvent.click(screen.getByText('Click me'));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });
});
```

### Playwright

Prefer readable scenario names and arrange/act/assert comments that map to Given/When/Then.
Gherkin/Cucumber is optional — Playwright specs with clear BDD structure are enough for this template.

```ts
test('user can open settings from the home page', async ({ page }) => {
  // Given
  await page.goto('/');
  // When
  await page.getByRole('link', { name: 'Settings' }).click();
  // Then
  await expect(page).toHaveURL(/settings/);
});
```
