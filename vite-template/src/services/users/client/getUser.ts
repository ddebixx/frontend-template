import {
  type User,
  UserApiResponseSchema,
  UserSchema,
} from "../schemas/userSchema";
import { mapUserResponse } from "../utils/mapUserResponse";

//  Example-only fetch — replace the URL when a real users API exists.
export const getUser = async (userId: string): Promise<User> => {
  try {
    const response = await fetch(`/api/users/${userId}`);

    if (!response.ok) {
      throw new Error(`Failed to load user ${userId}`);
    }

    const payload: unknown = await response.json();
    const apiUser = UserApiResponseSchema.parse(payload);
    const mappedUser = mapUserResponse(apiUser);

    return UserSchema.parse(mappedUser);
  } catch (error) {
    throw error instanceof Error
      ? error
      : new Error("Unexpected users client failure");
  }
};
