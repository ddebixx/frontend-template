import { z } from "zod";

export const UserApiResponseSchema = z.object({
  id: z.string(),
  full_name: z.string(),
  email: z.string().email(),
  role_label: z.string(),
});

export type UserApiResponse = z.infer<typeof UserApiResponseSchema>;

export const UserSchema = z.object({
  id: z.string(),
  fullName: z.string(),
  email: z.string().email(),
  roleLabel: z.string(),
});

export type User = z.infer<typeof UserSchema>;
