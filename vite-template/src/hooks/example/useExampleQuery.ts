import { useQuery } from "@tanstack/react-query";

import { getExample } from "@/fetchers/example/getExample";

export const useExampleQuery = (exampleId: string) => {
  return useQuery({
    queryKey: ["example", exampleId],
    queryFn: () => getExample(exampleId),
  });
};
