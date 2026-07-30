import {
  type Example,
  ExampleApiResponseSchema,
  ExampleSchema,
} from "@/fetchers/example/exampleSchema";
import { mapExampleResponse } from "@/utils/example/mapExampleResponse";

export const getExample = async (exampleId: string): Promise<Example> => {
  try {
    const response = await fetch(`/api/examples/${exampleId}`);

    if (!response.ok) {
      throw new Error(`Failed to load example ${exampleId}`);
    }

    const payload: unknown = await response.json();
    const apiExample = ExampleApiResponseSchema.parse(payload);
    const mappedExample = mapExampleResponse(apiExample);

    return ExampleSchema.parse(mappedExample);
  } catch (error) {
    throw error instanceof Error
      ? error
      : new Error("Unexpected example fetcher failure");
  }
};
