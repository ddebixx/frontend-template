import type { User, UserApiResponse } from "../schemas/userSchema";

export const mapUserResponse = (response: UserApiResponse): User => {
  return {
    id: response.id,
    fullName: response.full_name,
    email: response.email,
    roleLabel: response.role_label,
  };
};
