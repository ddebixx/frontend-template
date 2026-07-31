import { EXAMPLE_PANEL_HEADING_LEVEL } from "./ExamplePanel.constants";
import type { ExamplePanelProps } from "./ExamplePanel.types";

export const ExamplePanel = ({ title }: ExamplePanelProps) => {
  const Heading = EXAMPLE_PANEL_HEADING_LEVEL;

  return (
    <section aria-label={title}>
      <Heading>{title}</Heading>
    </section>
  );
};
