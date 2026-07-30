import type { Example, ExampleApiResponse } from "../schemas/exampleSchema";

export const mapExampleResponse = (response: ExampleApiResponse): Example => {
  return {
    id: response.id,
    label: response.label,
  };
};
