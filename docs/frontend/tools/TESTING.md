# Testing

## Strategy

Test pyramid: many fast unit tests, fewer e2e tests on critical happy paths.

## Unit

- **Vitest** + **@testing-library/react**
- Colocate `*.test.ts(x)` next to source
- Aim for solid coverage on changed code; template CI can start with a sensible threshold (e.g. 80%+) rather than absolute 100%

## E2E

- **Playwright**
- Specs under `e2e/[domain]/`
- Cover happy paths; leave edge cases to unit tests

## Style

Follow [Testing convention](../conventions/TESTING_CONVENTION.md) (Given/When/Then).
