import type {
  Example,
  ExampleApiResponse,
} from "@/fetchers/example/exampleSchema";

export const mapExampleResponse = (response: ExampleApiResponse): Example => {
  return {
    id: response.id,
    label: response.label,
  };
};
