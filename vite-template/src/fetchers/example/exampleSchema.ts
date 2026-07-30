import { z } from "zod";

export const ExampleApiResponseSchema = z.object({
  id: z.string(),
  label: z.string(),
});

export type ExampleApiResponse = z.infer<typeof ExampleApiResponseSchema>;

export const ExampleSchema = z.object({
  id: z.string(),
  label: z.string(),
});

export type Example = z.infer<typeof ExampleSchema>;
