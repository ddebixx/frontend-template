"use client";

import { useQuery } from "@tanstack/react-query";
import { getUser } from "./getUser";

//  UI imports this hook — it must not construct useQuery itself.
export const useUserQuery = (userId: string) => {
  return useQuery({
    queryKey: ["users", userId],
    queryFn: () => getUser(userId),
  });
};
