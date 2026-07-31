import { ExamplePanel } from "@/components/example/ExamplePanel/ExamplePanel";
import { EXAMPLE_DEFAULT_LABEL } from "@/constants/example";
import { formatLabel } from "@/utils/example/formatLabel";

export const ExampleSection = () => {
  const title = formatLabel(EXAMPLE_DEFAULT_LABEL);

  return <ExamplePanel title={title} />;
};
